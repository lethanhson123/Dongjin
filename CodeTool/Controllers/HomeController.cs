using CodeTool.Models;
using KingdomCodeTool.ViewModels;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Hosting.Server;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using MySqlConnector;
using System.Data;
using System.Data.Odbc;
using System.IO.Compression;
using System.Text;
using System.Xml.Linq;
using static System.Net.Mime.MediaTypeNames;


namespace CodeTool.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IWebHostEnvironment _WebHostEnvironment;
        public HomeController(ILogger<HomeController> logger, IWebHostEnvironment WebHostEnvironment)
        {
            _logger = logger;
            _WebHostEnvironment = WebHostEnvironment;
        }

        public IActionResult Index()
        {
            BaseViewModel model = new BaseViewModel();
            //model.ConnectionString = "Server=127.0.0.1;UID=root;Password=Sonheo@123;database=mysql;Port=3306;";
            //model.ConnectionString = "Driver={MariaDB ODBC 3.1 Driver};server=113.161.129.118;uid=itpcslave;pwd={MesUser123@};database=dongjin;port=3309;conn_timeout=60";
            model.ConnectionString = "Server=113.161.129.118;UID=itpcslave;Password=MesUser123@;database=dongjin;Port=3309;";
            return View(model);
        }

        public List<BaseViewModel> GetTables(string connectionString)
        {
            List<BaseViewModel> listResult = new List<BaseViewModel>();
            DataTable listTable = new DataTable();
            try
            {
                using (var cn = new MySqlConnection(connectionString))
                {
                    cn.Open();
                    string sql = "SHOW TABLES;";
                    MySqlDataAdapter adapter = new MySqlDataAdapter(sql, cn);
                    adapter.Fill(listTable);
                    cn.Close();
                }
                foreach (DataRow row in listTable.Rows)
                {
                    BaseViewModel baseViewModel = new BaseViewModel();
                    baseViewModel.Name = (string)row[0];
                    listResult.Add(baseViewModel);
                }
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }

            return listResult;
        }
        public List<string> CreateCode(string connectionString, string listIndex)
        {
            List<string> list = new List<string>();
            string domain = "https://localhost:7223/";
            DataTable listTable = new DataTable();
            using (var cn = new MySqlConnection(connectionString))
            {
                cn.Open();
                string sql = "SHOW TABLES;";
                MySqlDataAdapter adapter = new MySqlDataAdapter(sql, cn);
                adapter.Fill(listTable);
                cn.Close();
            }
            string folderRootName = DateTime.Now.ToString("yyyyMMddHHmmss");
            string folderRoot = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", folderRootName);
            Directory.CreateDirectory(folderRoot);
            StringBuilder Context = new StringBuilder();
            StringBuilder Service = new StringBuilder();
            StringBuilder Repository = new StringBuilder();
            StringBuilder BaseResult = new StringBuilder();
            StringBuilder BaseParameter = new StringBuilder();
            for (int i = 0; i < listTable.Rows.Count; i++)
            {
                foreach (string index in listIndex.Split(';'))
                {
                    if (!string.IsNullOrEmpty(index))
                    {
                        if (int.Parse(index) == i)
                        {
                            string className = (string)listTable.Rows[i][0];

                            DataTable dtItems = new DataTable();
                            using (var cn = new MySqlConnection(connectionString))
                            {
                                cn.Open();
                                string sql = "SHOW COLUMNS FROM " + className + ";";
                                MySqlDataAdapter adapter = new MySqlDataAdapter(sql, cn);
                                adapter.Fill(dtItems);
                                cn.Close();
                            }

                            StringBuilder Model = new StringBuilder();
                            StringBuilder ModelAngular = new StringBuilder();
                            StringBuilder ServiceAngular = new StringBuilder();
                            StringBuilder MasterAngular = new StringBuilder();
                            StringBuilder InlineAngular = new StringBuilder();
                            StringBuilder InfoAngular = new StringBuilder();
                            string Item = "";
                            Context.AppendLine(@"public virtual DbSet<" + className + "> " + className + " { get; set; }");
                            Service.AppendLine(@"services.AddTransient<I" + className + "Service, " + className + "Service>();");
                            Repository.AppendLine(@"services.AddTransient<I" + className + "Repository, " + className + "Repository>();");
                            BaseResult.AppendLine(@"public " + className + "? " + className + " { get; set; }");
                            BaseResult.AppendLine(@"public " + className + "Tranfer? " + className + "Tranfer { get; set; }");
                            BaseResult.AppendLine(@"public List<" + className + ">? List" + className + " { get; set; }");
                            BaseResult.AppendLine(@"public List<" + className + "Tranfer>? List" + className + "Tranfer { get; set; }");
                            BaseParameter.AppendLine(@"public " + className + "? " + className + " { get; set; }");
                            BaseParameter.AppendLine(@"public " + className + "? " + className + "Tranfer { get; set; }");
                            for (int j = 0; j < dtItems.Rows.Count; j++)
                            {
                                string sqlDataType = dtItems.Rows[j][1].ToString().Split('(')[0];
                                string ItemName = (string)dtItems.Rows[j][0];
                                if (j == 0)
                                {
                                    Item = ItemName;
                                }

                                Model.AppendLine("public " + Convert(sqlDataType) + "? " + ItemName + " { get; set; }");

                                ModelAngular.AppendLine(ItemName + "?: " + ConvertAngular(sqlDataType) + ";");

                                ServiceAngular.Append("'" + ItemName + "', ");

                                MasterAngular.AppendLine(@"<ng-container matColumnDef=""" + ItemName + @""">");
                                MasterAngular.AppendLine(@"<th mat-header-cell *matHeaderCellDef mat-sort-header>" + ItemName + "</th>");
                                MasterAngular.AppendLine(@"<td mat-cell *matCellDef=""let element"">{{element." + ItemName + @"}}</td>");
                                MasterAngular.AppendLine(@"</ng-container>");

                                InlineAngular.AppendLine(@"<ng-container matColumnDef=""" + ItemName + @""">");
                                InlineAngular.AppendLine(@"<th mat-header-cell *matHeaderCellDef mat-sort-header>" + ItemName + "</th>");
                                InlineAngular.AppendLine(@"<td mat-cell *matCellDef=""let element"">");
                                InlineAngular.AppendLine(@"<input class=""form-control"" type=""text"" placeholder=""" + ItemName + @""" name=""" + ItemName + @"{{element." + Item + @"}}"" [(ngModel)]=""element." + ItemName + @""">");
                                InlineAngular.AppendLine(@"</td>");
                                InlineAngular.AppendLine(@"</ng-container>");

                                InfoAngular.AppendLine(@"<div>");
                                InfoAngular.AppendLine(@"<label>" + ItemName + "</label>");
                                InfoAngular.AppendLine(@"<input placeholder=""" + ItemName + @""" [(ngModel)]=""" + className + @"Service.FormData." + ItemName + @""" name=""" + className + @"Service.FormData." + ItemName + @""" type=""text"" class=""form-control"">");
                                InfoAngular.AppendLine(@"</div>");

                            }


                            string content = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", "Model.html");
                            using (FileStream fs = new FileStream(content, FileMode.Open))
                            {
                                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                                {
                                    content = r.ReadToEnd();
                                }
                            }
                            content = content.Replace("[ClassName]", className);
                            content = content.Replace("[Items]", Model.ToString());
                            string fileName = className + ".cs";
                            string path = Path.Combine(folderRoot, "Model");
                            Directory.CreateDirectory(path);
                            path = Path.Combine(folderRoot, "Model", fileName);
                            using (FileStream fs = new FileStream(path, FileMode.Create))
                            {
                                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                                {
                                    w.WriteLine(content);
                                }
                            }

                            content = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", "Tranfer.html");
                            using (FileStream fs = new FileStream(content, FileMode.Open))
                            {
                                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                                {
                                    content = r.ReadToEnd();
                                }
                            }
                            content = content.Replace("[ClassName]", className);
                            fileName = className + "Tranfer.cs";
                            path = Path.Combine(folderRoot, "Tranfer");
                            Directory.CreateDirectory(path);
                            path = Path.Combine(folderRoot, "Tranfer", fileName);
                            using (FileStream fs = new FileStream(path, FileMode.Create))
                            {
                                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                                {
                                    w.WriteLine(content);
                                }
                            }

                            content = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", "Repository.html");
                            using (FileStream fs = new FileStream(content, FileMode.Open))
                            {
                                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                                {
                                    content = r.ReadToEnd();
                                }
                            }
                            content = content.Replace("[ClassName]", className);
                            fileName = className + "Repository.cs";
                            path = Path.Combine(folderRoot, "Repository");
                            Directory.CreateDirectory(path);
                            path = Path.Combine(folderRoot, "Repository", fileName);
                            using (FileStream fs = new FileStream(path, FileMode.Create))
                            {
                                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                                {
                                    w.WriteLine(content);
                                }
                            }

                            content = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", "IRepository.html");
                            using (FileStream fs = new FileStream(content, FileMode.Open))
                            {
                                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                                {
                                    content = r.ReadToEnd();
                                }
                            }
                            content = content.Replace("[ClassName]", className);
                            fileName = "I" + className + "Repository.cs";
                            path = Path.Combine(folderRoot, "IRepository");
                            Directory.CreateDirectory(path);
                            path = Path.Combine(folderRoot, "IRepository", fileName);
                            using (FileStream fs = new FileStream(path, FileMode.Create))
                            {
                                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                                {
                                    w.WriteLine(content);
                                }
                            }

                            content = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", "Service.html");
                            using (FileStream fs = new FileStream(content, FileMode.Open))
                            {
                                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                                {
                                    content = r.ReadToEnd();
                                }
                            }
                            content = content.Replace("[ClassName]", className);
                            content = content.Replace("[Item]", Item);
                            fileName = className + "Service.cs";
                            path = Path.Combine(folderRoot, "Service");
                            Directory.CreateDirectory(path);
                            path = Path.Combine(folderRoot, "Service", fileName);
                            using (FileStream fs = new FileStream(path, FileMode.Create))
                            {
                                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                                {
                                    w.WriteLine(content);
                                }
                            }

                            content = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", "IService.html");
                            using (FileStream fs = new FileStream(content, FileMode.Open))
                            {
                                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                                {
                                    content = r.ReadToEnd();
                                }
                            }
                            content = content.Replace("[ClassName]", className);
                            fileName = "I" + className + "Service.cs";
                            path = Path.Combine(folderRoot, "IService");
                            Directory.CreateDirectory(path);
                            path = Path.Combine(folderRoot, "IService", fileName);
                            using (FileStream fs = new FileStream(path, FileMode.Create))
                            {
                                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                                {
                                    w.WriteLine(content);
                                }
                            }

                            content = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", "Controller.html");
                            using (FileStream fs = new FileStream(content, FileMode.Open))
                            {
                                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                                {
                                    content = r.ReadToEnd();
                                }
                            }
                            content = content.Replace("[ClassName]", className);
                            fileName = className + "Controller.cs";
                            path = Path.Combine(folderRoot, "Controller");
                            Directory.CreateDirectory(path);
                            path = Path.Combine(folderRoot, "Controller", fileName);
                            using (FileStream fs = new FileStream(path, FileMode.Create))
                            {
                                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                                {
                                    w.WriteLine(content);
                                }
                            }

                            content = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", "AngularModel.html");
                            using (FileStream fs = new FileStream(content, FileMode.Open))
                            {
                                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                                {
                                    content = r.ReadToEnd();
                                }
                            }
                            content = content.Replace("[ClassName]", className);
                            content = content.Replace("[Items]", ModelAngular.ToString());
                            fileName = className + ".model.ts";
                            path = Path.Combine(folderRoot, "shared");
                            Directory.CreateDirectory(path);
                            path = Path.Combine(folderRoot, "shared", fileName);
                            using (FileStream fs = new FileStream(path, FileMode.Create))
                            {
                                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                                {
                                    w.WriteLine(content);
                                }
                            }

                            content = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", "AngularService.html");
                            using (FileStream fs = new FileStream(content, FileMode.Open))
                            {
                                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                                {
                                    content = r.ReadToEnd();
                                }
                            }
                            content = content.Replace("[ClassName]", className);
                            content = content.Replace("[Items]", ServiceAngular.ToString());
                            fileName = className + ".service.ts";
                            path = Path.Combine(folderRoot, "shared", fileName);
                            using (FileStream fs = new FileStream(path, FileMode.Create))
                            {
                                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                                {
                                    w.WriteLine(content);
                                }
                            }

                            content = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", "AngularComponentMasterTypescript.html");
                            using (FileStream fs = new FileStream(content, FileMode.Open))
                            {
                                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                                {
                                    content = r.ReadToEnd();
                                }
                            }
                            content = content.Replace("[ClassName]", className);
                            content = content.Replace("[Item]", Item);
                            fileName = className + ".component.ts";
                            path = Path.Combine(folderRoot, "Component");
                            Directory.CreateDirectory(path);
                            path = Path.Combine(folderRoot, "Component", fileName);
                            using (FileStream fs = new FileStream(path, FileMode.Create))
                            {
                                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                                {
                                    w.WriteLine(content);
                                }
                            }

                            content = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", "AngularComponentMaster.html");
                            using (FileStream fs = new FileStream(content, FileMode.Open))
                            {
                                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                                {
                                    content = r.ReadToEnd();
                                }
                            }
                            content = content.Replace("[ClassName]", className);
                            content = content.Replace("[Item]", Item);
                            content = content.Replace("[Items]", MasterAngular.ToString());
                            fileName = className + ".component.html";
                            path = Path.Combine(folderRoot, "Component", fileName);
                            using (FileStream fs = new FileStream(path, FileMode.Create))
                            {
                                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                                {
                                    w.WriteLine(content);
                                }
                            }

                            content = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", "AngularComponentInline.html");
                            using (FileStream fs = new FileStream(content, FileMode.Open))
                            {
                                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                                {
                                    content = r.ReadToEnd();
                                }
                            }
                            content = content.Replace("[ClassName]", className);
                            content = content.Replace("[Item]", Item);
                            content = content.Replace("[Items]", InlineAngular.ToString());
                            fileName = className + "Inline.component.html";
                            path = Path.Combine(folderRoot, "Component", fileName);
                            using (FileStream fs = new FileStream(path, FileMode.Create))
                            {
                                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                                {
                                    w.WriteLine(content);
                                }
                            }

                            content = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", "AngularComponentInfoTypescript.html");
                            using (FileStream fs = new FileStream(content, FileMode.Open))
                            {
                                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                                {
                                    content = r.ReadToEnd();
                                }
                            }
                            content = content.Replace("[ClassName]", className);
                            content = content.Replace("[Item]", Item);
                            fileName = className + "Info.component.ts";
                            path = Path.Combine(folderRoot, "Component", fileName);
                            using (FileStream fs = new FileStream(path, FileMode.Create))
                            {
                                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                                {
                                    w.WriteLine(content);
                                }
                            }

                            content = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", "AngularComponentInfo.html");
                            using (FileStream fs = new FileStream(content, FileMode.Open))
                            {
                                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                                {
                                    content = r.ReadToEnd();
                                }
                            }
                            content = content.Replace("[ClassName]", className);
                            content = content.Replace("[Items]", InfoAngular.ToString());
                            fileName = className + "Info.component.html";
                            path = Path.Combine(folderRoot, "Component", fileName);
                            using (FileStream fs = new FileStream(path, FileMode.Create))
                            {
                                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                                {
                                    w.WriteLine(content);
                                }
                            }

                            content = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", "AngularComponentDetailTypescript.html");
                            using (FileStream fs = new FileStream(content, FileMode.Open))
                            {
                                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                                {
                                    content = r.ReadToEnd();
                                }
                            }
                            content = content.Replace("[ClassName]", className);
                            content = content.Replace("[Item]", Item);
                            fileName = className + "Detail.component.ts";
                            path = Path.Combine(folderRoot, "Component", fileName);
                            using (FileStream fs = new FileStream(path, FileMode.Create))
                            {
                                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                                {
                                    w.WriteLine(content);
                                }
                            }

                            content = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", "AngularComponentDetail.html");
                            using (FileStream fs = new FileStream(content, FileMode.Open))
                            {
                                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                                {
                                    content = r.ReadToEnd();
                                }
                            }
                            content = content.Replace("[ClassName]", className);
                            content = content.Replace("[Items]", InfoAngular.ToString());
                            fileName = className + "Detail.component.html";
                            path = Path.Combine(folderRoot, "Component", fileName);
                            using (FileStream fs = new FileStream(path, FileMode.Create))
                            {
                                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                                {
                                    w.WriteLine(content);
                                }
                            }
                        }
                    }
                }
            }

            string ContentContext = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", "Context.html");
            using (FileStream fs = new FileStream(ContentContext, FileMode.Open))
            {
                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                {
                    ContentContext = r.ReadToEnd();
                }
            }

            ContentContext = ContentContext.Replace("[Items]", Context.ToString());
            string fileNameContext = "Context.cs";
            string pathContext = Path.Combine(folderRoot, fileNameContext);
            using (FileStream fs = new FileStream(pathContext, FileMode.Create))
            {
                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                {
                    w.WriteLine(ContentContext);
                }
            }

            ContentContext = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", "ConfigureService.html");
            using (FileStream fs = new FileStream(ContentContext, FileMode.Open))
            {
                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                {
                    ContentContext = r.ReadToEnd();
                }
            }

            ContentContext = ContentContext.Replace("[Service]", Service.ToString());
            ContentContext = ContentContext.Replace("[Repository]", Repository.ToString());
            fileNameContext = "ConfigureService.cs";
            pathContext = Path.Combine(folderRoot, fileNameContext);
            using (FileStream fs = new FileStream(pathContext, FileMode.Create))
            {
                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                {
                    w.WriteLine(ContentContext);
                }
            }

            ContentContext = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", "BaseResult.html");
            using (FileStream fs = new FileStream(ContentContext, FileMode.Open))
            {
                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                {
                    ContentContext = r.ReadToEnd();
                }
            }

            ContentContext = ContentContext.Replace("[Items]", BaseResult.ToString());
            fileNameContext = "BaseResult.cs";
            pathContext = Path.Combine(folderRoot, fileNameContext);
            using (FileStream fs = new FileStream(pathContext, FileMode.Create))
            {
                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                {
                    w.WriteLine(ContentContext);
                }
            }

            ContentContext = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", "BaseParameter.html");
            using (FileStream fs = new FileStream(ContentContext, FileMode.Open))
            {
                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                {
                    ContentContext = r.ReadToEnd();
                }
            }

            ContentContext = ContentContext.Replace("[Items]", BaseParameter.ToString());
            fileNameContext = "BaseParameter.cs";
            pathContext = Path.Combine(folderRoot, fileNameContext);
            using (FileStream fs = new FileStream(pathContext, FileMode.Create))
            {
                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                {
                    w.WriteLine(ContentContext);
                }
            }

            //string fileNameZIP = folderRootName + ".zip";
            //string inputPath = Path.Combine(folderRoot, folderRootName);
            //string outPath = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", fileNameZIP);
            //ZipFile.CreateFromDirectory(inputPath, outPath, CompressionLevel.Fastest, true);
            //outPath = domain + "Download/" + fileNameZIP;
            //list.Add(outPath);

            return list;
        }
        private string Convert(string sqlDataType)
        {
            sqlDataType = sqlDataType.ToLower();
            switch (sqlDataType)
            {
                case "bit":
                    return "bool";
                case "int":
                case "smallint":
                case "tinyint":
                    return "int";
                case "bigint":
                    return "long";
                case "date":
                case "datetime":
                case "smalldatetime":
                case "timestamp":
                    return "DateTime";
                case "real":
                    return "double";
                case "money":
                case "smallmoney":
                case "decimal":
                    return "decimal";
                case "float":
                    return "float";
                case "double":
                    return "double";
                case "uniqueidentifier":
                    return "Guid";
                default: return "string";
            }
        }
        private string ConvertAngular(string sqlDataType)
        {
            sqlDataType = sqlDataType.ToLower();
            switch (sqlDataType)
            {
                case "bit":
                    return "boolean";
                case "int":
                case "smallint":
                case "tinyint":
                case "bigint":
                case "real":
                case "money":
                case "smallmoney":
                case "decimal":
                case "float":
                case "double":
                    return "number";
                case "date":
                case "datetime":
                case "smalldatetime":
                case "timestamp":
                    return "Date";
                default: return "string";
            }
        }

        public void CreateView()
        {
            List<tsmenuTranfer> ListtsmenuTranfer = SetMenu();
            List<tsmenuTranfer> ListtsmenuTranfer2 = ListtsmenuTranfer.Where(o => o.MENU_LVL == 2).ToList();
            string folderRootName = DateTime.Now.ToString("yyyyMMddHHmmss");
            string folderRoot = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", folderRootName);
            Directory.CreateDirectory(folderRoot);

            foreach (tsmenuTranfer tsmenuTranfer in ListtsmenuTranfer2)
            {
                string className = tsmenuTranfer.SCRN_PATH;
                string content = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", "ViewController.html");
                using (FileStream fs = new FileStream(content, FileMode.Open))
                {
                    using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                    {
                        content = r.ReadToEnd();
                    }
                }
                content = content.Replace("[ClassName]", className);
                string fileName = className + "Controller.cs";
                string path = Path.Combine(folderRoot, "Controller");
                Directory.CreateDirectory(path);
                path = Path.Combine(folderRoot, "Controller", fileName);
                using (FileStream fs = new FileStream(path, FileMode.Create))
                {
                    using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                    {
                        w.WriteLine(content);
                    }
                }

                content = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", "ViewIndex.html");
                using (FileStream fs = new FileStream(content, FileMode.Open))
                {
                    using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                    {
                        content = r.ReadToEnd();
                    }
                }
                fileName = "Index.html";
                path = Path.Combine(folderRoot, className);
                Directory.CreateDirectory(path);
                path = Path.Combine(folderRoot, className, fileName);
                using (FileStream fs = new FileStream(path, FileMode.Create))
                {
                    using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                    {
                        w.WriteLine(content);
                    }
                }

                content = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", "ViewService.html");
                using (FileStream fs = new FileStream(content, FileMode.Open))
                {
                    using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                    {
                        content = r.ReadToEnd();
                    }
                }
                content = content.Replace("[ClassName]", className);
                fileName = className + "Service.cs";
                path = Path.Combine(folderRoot, "Implement");
                Directory.CreateDirectory(path);
                path = Path.Combine(folderRoot, "Implement", fileName);
                using (FileStream fs = new FileStream(path, FileMode.Create))
                {
                    using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                    {
                        w.WriteLine(content);
                    }
                }

                content = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", "ViewIService.html");
                using (FileStream fs = new FileStream(content, FileMode.Open))
                {
                    using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                    {
                        content = r.ReadToEnd();
                    }
                }
                content = content.Replace("[ClassName]", className);
                fileName = "I" + className + "Service.cs";
                path = Path.Combine(folderRoot, "Interface");
                Directory.CreateDirectory(path);
                path = Path.Combine(folderRoot, "Interface", fileName);
                using (FileStream fs = new FileStream(path, FileMode.Create))
                {
                    using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                    {
                        w.WriteLine(content);
                    }
                }



            }



        }
        private List<tsmenuTranfer> SetMenu()
        {
            List<tsmenuTranfer> result = new List<tsmenuTranfer>();

            tsmenuTranfer tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 1;
            tsmenuTranfer.ParentID = 0;
            tsmenuTranfer.MENU_LVL = 1;
            tsmenuTranfer.SCRN_PATH = "AP_MAIN";
            tsmenuTranfer.MENU_NM_EN = "AminPR";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 2;
            tsmenuTranfer.ParentID = 0;
            tsmenuTranfer.MENU_LVL = 1;
            tsmenuTranfer.SCRN_PATH = "";
            tsmenuTranfer.MENU_NM_EN = "Z";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 3;
            tsmenuTranfer.ParentID = 0;
            tsmenuTranfer.MENU_LVL = 1;
            tsmenuTranfer.SCRN_PATH = "";
            tsmenuTranfer.MENU_NM_EN = "A";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 4;
            tsmenuTranfer.ParentID = 0;
            tsmenuTranfer.MENU_LVL = 1;
            tsmenuTranfer.SCRN_PATH = "";
            tsmenuTranfer.MENU_NM_EN = "V";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 5;
            tsmenuTranfer.ParentID = 0;
            tsmenuTranfer.MENU_LVL = 1;
            tsmenuTranfer.SCRN_PATH = "";
            tsmenuTranfer.MENU_NM_EN = "Y";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 6;
            tsmenuTranfer.ParentID = 0;
            tsmenuTranfer.MENU_LVL = 1;
            tsmenuTranfer.SCRN_PATH = "";
            tsmenuTranfer.MENU_NM_EN = "B";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 7;
            tsmenuTranfer.ParentID = 0;
            tsmenuTranfer.MENU_LVL = 1;
            tsmenuTranfer.SCRN_PATH = "";
            tsmenuTranfer.MENU_NM_EN = "C";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 8;
            tsmenuTranfer.ParentID = 0;
            tsmenuTranfer.MENU_LVL = 1;
            tsmenuTranfer.SCRN_PATH = "";
            tsmenuTranfer.MENU_NM_EN = "D";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 9;
            tsmenuTranfer.ParentID = 0;
            tsmenuTranfer.MENU_LVL = 1;
            tsmenuTranfer.SCRN_PATH = "";
            tsmenuTranfer.MENU_NM_EN = "E";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 10;
            tsmenuTranfer.ParentID = 0;
            tsmenuTranfer.MENU_LVL = 1;
            tsmenuTranfer.SCRN_PATH = "";
            tsmenuTranfer.MENU_NM_EN = "F";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 11;
            tsmenuTranfer.ParentID = 0;
            tsmenuTranfer.MENU_LVL = 1;
            tsmenuTranfer.SCRN_PATH = "";
            tsmenuTranfer.MENU_NM_EN = "G";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 21;
            tsmenuTranfer.ParentID = 2;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "Z01";
            tsmenuTranfer.MENU_NM_EN = "Z01";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 22;
            tsmenuTranfer.ParentID = 2;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "Z02";
            tsmenuTranfer.MENU_NM_EN = "Z02";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 23;
            tsmenuTranfer.ParentID = 2;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "Z07";
            tsmenuTranfer.MENU_NM_EN = "Z07";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 24;
            tsmenuTranfer.ParentID = 2;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "Z05";
            tsmenuTranfer.MENU_NM_EN = "Z05";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 25;
            tsmenuTranfer.ParentID = 2;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "Z04";
            tsmenuTranfer.MENU_NM_EN = "Z04";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 31;
            tsmenuTranfer.ParentID = 3;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "A03";
            tsmenuTranfer.MENU_NM_EN = "A03";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 32;
            tsmenuTranfer.ParentID = 3;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "A01";
            tsmenuTranfer.MENU_NM_EN = "A01";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 33;
            tsmenuTranfer.ParentID = 3;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "A02";
            tsmenuTranfer.MENU_NM_EN = "A02";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 34;
            tsmenuTranfer.ParentID = 3;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "A04";
            tsmenuTranfer.MENU_NM_EN = "A04";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 35;
            tsmenuTranfer.ParentID = 3;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "A05";
            tsmenuTranfer.MENU_NM_EN = "A05";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 36;
            tsmenuTranfer.ParentID = 3;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "A06";
            tsmenuTranfer.MENU_NM_EN = "A06";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 37;
            tsmenuTranfer.ParentID = 3;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "A07";
            tsmenuTranfer.MENU_NM_EN = "A07";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 38;
            tsmenuTranfer.ParentID = 3;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "A09";
            tsmenuTranfer.MENU_NM_EN = "A09";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 41;
            tsmenuTranfer.ParentID = 4;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "V01";
            tsmenuTranfer.MENU_NM_EN = "V01";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 42;
            tsmenuTranfer.ParentID = 4;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "V02";
            tsmenuTranfer.MENU_NM_EN = "V02";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 43;
            tsmenuTranfer.ParentID = 4;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "V03";
            tsmenuTranfer.MENU_NM_EN = "V03";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 44;
            tsmenuTranfer.ParentID = 4;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "V04";
            tsmenuTranfer.MENU_NM_EN = "V04";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 45;
            tsmenuTranfer.ParentID = 4;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "V05";
            tsmenuTranfer.MENU_NM_EN = "V05";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 46;
            tsmenuTranfer.ParentID = 4;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "V06";
            tsmenuTranfer.MENU_NM_EN = "V06";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 47;
            tsmenuTranfer.ParentID = 4;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "V07";
            tsmenuTranfer.MENU_NM_EN = "V07";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 51;
            tsmenuTranfer.ParentID = 5;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "B09";
            tsmenuTranfer.MENU_NM_EN = "B09";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 52;
            tsmenuTranfer.ParentID = 5;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "B10";
            tsmenuTranfer.MENU_NM_EN = "B10";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 53;
            tsmenuTranfer.ParentID = 5;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "C13";
            tsmenuTranfer.MENU_NM_EN = "C13";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 54;
            tsmenuTranfer.ParentID = 5;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "C14";
            tsmenuTranfer.MENU_NM_EN = "C14";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 55;
            tsmenuTranfer.ParentID = 5;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "E04";
            tsmenuTranfer.MENU_NM_EN = "E04";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 56;
            tsmenuTranfer.ParentID = 5;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "E05";
            tsmenuTranfer.MENU_NM_EN = "E05";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 57;
            tsmenuTranfer.ParentID = 5;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "C16";
            tsmenuTranfer.MENU_NM_EN = "C16";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 58;
            tsmenuTranfer.ParentID = 5;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "C17";
            tsmenuTranfer.MENU_NM_EN = "C17";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 61;
            tsmenuTranfer.ParentID = 6;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "B01";
            tsmenuTranfer.MENU_NM_EN = "B01";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 62;
            tsmenuTranfer.ParentID = 6;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "B03";
            tsmenuTranfer.MENU_NM_EN = "B03";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 63;
            tsmenuTranfer.ParentID = 6;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "B02";
            tsmenuTranfer.MENU_NM_EN = "B02";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 64;
            tsmenuTranfer.ParentID = 6;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "B04";
            tsmenuTranfer.MENU_NM_EN = "B04";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 65;
            tsmenuTranfer.ParentID = 6;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "B05";
            tsmenuTranfer.MENU_NM_EN = "B05";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 66;
            tsmenuTranfer.ParentID = 6;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "B06";
            tsmenuTranfer.MENU_NM_EN = "B06";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 67;
            tsmenuTranfer.ParentID = 6;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "B11";
            tsmenuTranfer.MENU_NM_EN = "B11";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 68;
            tsmenuTranfer.ParentID = 6;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "B12";
            tsmenuTranfer.MENU_NM_EN = "B12";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 69;
            tsmenuTranfer.ParentID = 6;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "B07";
            tsmenuTranfer.MENU_NM_EN = "B07";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 610;
            tsmenuTranfer.ParentID = 6;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "B08";
            tsmenuTranfer.MENU_NM_EN = "B08";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 71;
            tsmenuTranfer.ParentID = 7;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "C01";
            tsmenuTranfer.MENU_NM_EN = "C01";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 72;
            tsmenuTranfer.ParentID = 7;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "C06";
            tsmenuTranfer.MENU_NM_EN = "C06";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 73;
            tsmenuTranfer.ParentID = 7;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "Z03";
            tsmenuTranfer.MENU_NM_EN = "Z03";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 74;
            tsmenuTranfer.ParentID = 7;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "C02";
            tsmenuTranfer.MENU_NM_EN = "C02";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 75;
            tsmenuTranfer.ParentID = 7;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "C05";
            tsmenuTranfer.MENU_NM_EN = "C05";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 76;
            tsmenuTranfer.ParentID = 7;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "C11";
            tsmenuTranfer.MENU_NM_EN = "C11";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 77;
            tsmenuTranfer.ParentID = 7;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "C09";
            tsmenuTranfer.MENU_NM_EN = "C09";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 78;
            tsmenuTranfer.ParentID = 7;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "C20";
            tsmenuTranfer.MENU_NM_EN = "C20";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 79;
            tsmenuTranfer.ParentID = 7;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "C03";
            tsmenuTranfer.MENU_NM_EN = "C03";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 710;
            tsmenuTranfer.ParentID = 7;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "C18";
            tsmenuTranfer.MENU_NM_EN = "C18";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 711;
            tsmenuTranfer.ParentID = 7;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "C19";
            tsmenuTranfer.MENU_NM_EN = "C19";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 712;
            tsmenuTranfer.ParentID = 7;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "C04";
            tsmenuTranfer.MENU_NM_EN = "C04";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 713;
            tsmenuTranfer.ParentID = 7;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "Z06";
            tsmenuTranfer.MENU_NM_EN = "Z06";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 714;
            tsmenuTranfer.ParentID = 7;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "C10";
            tsmenuTranfer.MENU_NM_EN = "C10";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 715;
            tsmenuTranfer.ParentID = 7;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "C12";
            tsmenuTranfer.MENU_NM_EN = "C12";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 716;
            tsmenuTranfer.ParentID = 7;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "C15";
            tsmenuTranfer.MENU_NM_EN = "C15";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 717;
            tsmenuTranfer.ParentID = 7;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "C08";
            tsmenuTranfer.MENU_NM_EN = "C08";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 81;
            tsmenuTranfer.ParentID = 8;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "D07";
            tsmenuTranfer.MENU_NM_EN = "D07";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 82;
            tsmenuTranfer.ParentID = 8;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "D02";
            tsmenuTranfer.MENU_NM_EN = "D02";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 83;
            tsmenuTranfer.ParentID = 8;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "D01";
            tsmenuTranfer.MENU_NM_EN = "D01";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 84;
            tsmenuTranfer.ParentID = 8;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "D03";
            tsmenuTranfer.MENU_NM_EN = "D03";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 85;
            tsmenuTranfer.ParentID = 8;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "D13";
            tsmenuTranfer.MENU_NM_EN = "D13";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 86;
            tsmenuTranfer.ParentID = 8;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "D14";
            tsmenuTranfer.MENU_NM_EN = "D14";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 87;
            tsmenuTranfer.ParentID = 8;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "D15";
            tsmenuTranfer.MENU_NM_EN = "D15";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 88;
            tsmenuTranfer.ParentID = 8;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "D16";
            tsmenuTranfer.MENU_NM_EN = "D16";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 89;
            tsmenuTranfer.ParentID = 8;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "D12";
            tsmenuTranfer.MENU_NM_EN = "D12";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 810;
            tsmenuTranfer.ParentID = 8;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "D04";
            tsmenuTranfer.MENU_NM_EN = "D04";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 811;
            tsmenuTranfer.ParentID = 8;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "D99";
            tsmenuTranfer.MENU_NM_EN = "D99";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 812;
            tsmenuTranfer.ParentID = 8;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "D05";
            tsmenuTranfer.MENU_NM_EN = "D05";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 813;
            tsmenuTranfer.ParentID = 8;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "D06";
            tsmenuTranfer.MENU_NM_EN = "D06";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 814;
            tsmenuTranfer.ParentID = 8;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "D09";
            tsmenuTranfer.MENU_NM_EN = "D09";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 815;
            tsmenuTranfer.ParentID = 8;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "D11";
            tsmenuTranfer.MENU_NM_EN = "D11";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 91;
            tsmenuTranfer.ParentID = 9;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "E01";
            tsmenuTranfer.MENU_NM_EN = "E01";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 92;
            tsmenuTranfer.ParentID = 9;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "E02";
            tsmenuTranfer.MENU_NM_EN = "E02";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 93;
            tsmenuTranfer.ParentID = 9;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "E03";
            tsmenuTranfer.MENU_NM_EN = "E03";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 94;
            tsmenuTranfer.ParentID = 9;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "E20";
            tsmenuTranfer.MENU_NM_EN = "E20";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 101;
            tsmenuTranfer.ParentID = 10;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "F01";
            tsmenuTranfer.MENU_NM_EN = "F01";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 102;
            tsmenuTranfer.ParentID = 10;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "F03";
            tsmenuTranfer.MENU_NM_EN = "F03";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 110;
            tsmenuTranfer.ParentID = 11;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "G01";
            tsmenuTranfer.MENU_NM_EN = "G01";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 111;
            tsmenuTranfer.ParentID = 11;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "G02";
            tsmenuTranfer.MENU_NM_EN = "G02";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 112;
            tsmenuTranfer.ParentID = 11;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "G03";
            tsmenuTranfer.MENU_NM_EN = "G03";
            result.Add(tsmenuTranfer);

            tsmenuTranfer = new tsmenuTranfer();
            tsmenuTranfer.MENU_IDX = 113;
            tsmenuTranfer.ParentID = 11;
            tsmenuTranfer.MENU_LVL = 2;
            tsmenuTranfer.SCRN_PATH = "G04";
            tsmenuTranfer.MENU_NM_EN = "G04";
            result.Add(tsmenuTranfer);

            return result;
        }
    }
}
