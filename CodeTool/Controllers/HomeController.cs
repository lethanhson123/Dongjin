using KingdomCodeTool.ViewModels;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using MySqlConnector;
using System.Data;
using System.IO.Compression;
using System.Text;


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
            model.ConnectionString = "Server=127.0.0.1;UID=root;Password=Sonheo@123;database=mysql;Port=3306;";
            return View(model);
        }

        public List<BaseViewModel> GetTables(string connectionString)
        {
            List<BaseViewModel> listResult = new List<BaseViewModel>();
            DataTable listTable = new DataTable();
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
            for (int i = 0; i < listTable.Rows.Count; i++)
            {
                foreach (string index in listIndex.Split(';'))
                {
                    if (!string.IsNullOrEmpty(index))
                    {
                        if (int.Parse(index) == i)
                        {
                            string className = (string)listTable.Rows[i][0];

                            string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", className);
                            Directory.CreateDirectory(folderPath);
                            DataTable dtItems=new  DataTable();
                            using (var cn = new MySqlConnection(connectionString))
                            {
                                string sql = "SHOW COLUMNS FROM "+ className + ";";
                                MySqlDataAdapter adapter = new MySqlDataAdapter(sql, cn);                                
                                adapter.Fill(dtItems);                                
                            }
                        

                            StringBuilder Model = new StringBuilder();
                            foreach (DataRow row in dtItems.Rows)
                            {
                                string sqlDataType = row[1].ToString().Split('(')[0];
                                Model.AppendLine("public " + Convert(sqlDataType) + "? " + (string)row[0] + " { get; set; }");                                
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
                            string path = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", className, fileName);
                            using (FileStream fs = new FileStream(path, FileMode.Create))
                            {
                                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                                {
                                    w.WriteLine(content);
                                }
                            }


                            string fileNameZIP = className + ".zip";
                            string inputPath = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", className);
                            string outPath = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", fileNameZIP);

                            if (System.IO.File.Exists(outPath))
                            {
                                try
                                {
                                    System.IO.File.Delete(outPath);
                                }
                                catch (Exception ex)
                                {
                                    string mes = ex.Message;
                                }
                            }
                            ZipFile.CreateFromDirectory(inputPath, outPath, CompressionLevel.Fastest, true);
                            outPath = domain + "Download/" + fileNameZIP;
                            list.Add(outPath);
                        }
                    }
                }
            }
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
                case "uniqueidentifier":
                    return "Guid";
                default: return "string";
            }
        }
    }
}
