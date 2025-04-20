using OfficeOpenXml.FormulaParsing.Excel.Functions.Text;
using System.Reflection;

namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class torderlistController : BaseController<torderlist, ItorderlistService>
    {
        private readonly ItorderlistService _torderlistService;
        private readonly IWebHostEnvironment _WebHostEnvironment;
        public torderlistController(ItorderlistService torderlistService, IWebHostEnvironment WebHostEnvironment) : base(torderlistService, WebHostEnvironment)
        {
            _torderlistService = torderlistService;
            _WebHostEnvironment = WebHostEnvironment;
        }
        [HttpPost]
        [Route("C02DB_LISECHKAsync")]
        public virtual async Task<string> C02DB_LISECHKAsync()
        {
            string result = GlobalHelper.InitializationString;
            try
            {
                result = await _torderlistService.C02DB_LISECHKAsync();
            }
            catch (Exception ex)
            {
                string message = ex.Message;
                result = message;
            }
            return result;
        }
        [HttpPost]
        [Route("C02MC_LISTToListAsync")]
        public virtual async Task<List<torderlist>> C02MC_LISTToListAsync()
        {
            List<torderlist> result = new List<torderlist>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _torderlistService.C02MC_LISTToListAsync(baseParameter.SearchString);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("C02Buttonfind_ClickAsync")]
        public virtual async Task<string> C02Buttonfind_ClickAsync()
        {
            string result = GlobalHelper.InitializationString;
            try
            {
                result = await _torderlistService.C02Buttonfind_ClickAsync();
            }
            catch (Exception ex)
            {
                string message = ex.Message;
                result = message;
            }
            return result;
        }
        [HttpPost]
        [Route("C02Buttonfind_ClickToListAsync")]
        public virtual async Task<List<torderlistTranfer>> C02Buttonfind_ClickToListAsync()
        {
            List<torderlistTranfer> result = new List<torderlistTranfer>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _torderlistService.C02Buttonfind_ClickToListAsync(baseParameter.SearchString001, baseParameter.SearchString002, baseParameter.SearchString003, baseParameter.SearchString004, baseParameter.SearchString005, baseParameter.SearchString006, baseParameter.Begin.Value);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("C02Buttonsave_ClickAsync")]
        public virtual async Task<string> C02Buttonsave_ClickAsync()
        {
            string result = GlobalHelper.InitializationString;
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _torderlistService.C02Buttonsave_ClickAsync(baseParameter.SearchString001, baseParameter.SearchString002, baseParameter.Begin.Value);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
                result = message;
            }
            return result;
        }
        [HttpPost]
        [Route("C02Buttondelete_ClickAsync")]
        public virtual async Task<string> C02Buttondelete_ClickAsync()
        {
            string result = GlobalHelper.InitializationString;
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _torderlistService.C02Buttondelete_ClickAsync(baseParameter.Account, baseParameter.SearchString001, baseParameter.Begin.Value);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
                result = message;
            }
            return result;
        }
        [HttpPost]
        [Route("C02Buttonsave_ClickGroupAsync")]
        public virtual async Task<string> C02Buttonsave_ClickGroupAsync()
        {
            string result = GlobalHelper.InitializationString;
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                for (int i = 0; i < baseParameter.ListSearchString001.Count; i++)
                {
                    baseParameter.SearchString001 = baseParameter.ListSearchString001[i];
                    baseParameter.SearchString002 = baseParameter.ListSearchString002[i];
                    baseParameter.Begin = baseParameter.ListBegin[i];
                    result = await _torderlistService.C02Buttonsave_ClickAsync(baseParameter.SearchString001, baseParameter.SearchString002, baseParameter.Begin.Value);
                }
            }
            catch (Exception ex)
            {
                string message = ex.Message;
                result = message;
            }
            return result;
        }
        [HttpPost]
        [Route("C02Buttondelete_ClickGroupAsync")]
        public virtual async Task<string> C02Buttondelete_ClickGroupAsync()
        {
            string result = GlobalHelper.InitializationString;
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                for (int i = 0; i < baseParameter.ListSearchString001.Count; i++)
                {
                    baseParameter.SearchString001 = baseParameter.ListSearchString001[i];
                    baseParameter.Begin = baseParameter.ListBegin[i];
                    result = await _torderlistService.C02Buttondelete_ClickAsync(baseParameter.Account, baseParameter.SearchString001, baseParameter.Begin.Value);
                }

            }
            catch (Exception ex)
            {
                string message = ex.Message;
                result = message;
            }
            return result;
        }
        [HttpPost]
        [Route("C02Buttonfind_ClickToExcelAsync")]
        public async Task<JsonResult> C02Buttonfind_ClickToExcelAsync()
        {
            string result = GlobalHelper.InitializationString;
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                List<torderlistTranfer> List = new List<torderlistTranfer>();
                List = await _torderlistService.C02Buttonfind_ClickToListAsync(baseParameter.SearchString001, baseParameter.SearchString002, baseParameter.SearchString003, baseParameter.SearchString004, baseParameter.SearchString005, baseParameter.SearchString006, baseParameter.Begin.Value);
                string fileName = @"PARTNO" + GlobalHelper.InitializationDateTimeCode + ".xlsx";
                var streamExport = new MemoryStream();
                InitializationC02Buttonfind_ClickToExcelAsync(List, streamExport);
                var physicalPathCreate = Path.Combine(_WebHostEnvironment.WebRootPath, GlobalHelper.Download, fileName);
                using (var stream = new FileStream(physicalPathCreate, FileMode.Create))
                {
                    streamExport.CopyTo(stream);
                }
                result = GlobalHelper.APISite + "/" + GlobalHelper.Download + "/" + fileName;
            }
            catch (Exception ex)
            {
                result = ex.Message;
            }
            return Json(result);
        }
        private void InitializationC02Buttonfind_ClickToExcelAsync(List<torderlistTranfer> list, MemoryStream streamExport)
        {
            using (var package = new ExcelPackage(streamExport))
            {
                var workSheet = package.Workbook.Worksheets.Add("C02");
                int row = 1;
                int column = 1;
                workSheet.Cells[row, column].Value = "No";
                column = column + 1;

                Type temp = typeof(torderlistTranfer);
                foreach (PropertyInfo pro in temp.GetProperties())
                {
                    workSheet.Cells[row, column].Value = pro.Name;
                    column = column + 1;
                }              

                for (int i = 1; i < column; i++)
                {
                    workSheet.Cells[row, i].Style.Font.Bold = true;
                    workSheet.Cells[row, i].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                    workSheet.Cells[row, i].Style.Font.Name = "Times New Roman";
                    workSheet.Cells[row, i].Style.Font.Size = 14;
                    workSheet.Cells[row, i].Style.Border.Top.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Left.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Right.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                }

                row = row + 1;
                
                int stt = 1;
                foreach (torderlistTranfer item in list)
                {
                    try
                    {
                        workSheet.Cells[row, 1].Value = stt;
                        workSheet.Cells[row, 1].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                        int columnSub = 2;
                        foreach (PropertyInfo pro in temp.GetProperties())
                        {
                            workSheet.Cells[row, columnSub].Value = pro.GetValue(item);
                            columnSub = columnSub + 1;
                        }
                        
                        for (int i = 1; i < column; i++)
                        {
                            workSheet.Cells[row, i].Style.Font.Name = "Times New Roman";
                            workSheet.Cells[row, i].Style.Font.Size = 14;
                            workSheet.Cells[row, i].Style.Border.Top.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Left.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Right.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                            if (i > 6)
                            {
                                workSheet.Cells[row, i].Style.Font.Bold = true;
                                workSheet.Cells[row, i].Style.HorizontalAlignment = ExcelHorizontalAlignment.Right;
                            }
                        }
                        stt = stt + 1;
                        row = row + 1;
                    }
                    catch (Exception ex)
                    {
                        string mes = ex.Message;
                    }

                }
                for (int i = 1; i <= column; i++)
                {
                    workSheet.Column(i).AutoFit();
                }
                package.Save();
            }
            streamExport.Position = 0;
        }
    }
}

