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
                            BaseResult.AppendLine(@"public List<"+ className + ">? List"+ className + " { get; set; }");
                            BaseResult.AppendLine(@"public List<" + className + "Tranfer>? List" + className + "Tranfer { get; set; }");
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
    }
}
