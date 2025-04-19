using OfficeOpenXml.FormulaParsing.Excel.Functions.Text;
using ZXing.QrCode.Internal;

namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tspartController : BaseController<tspart, ItspartService>
    {
        private readonly ItspartService _tspartService;
        private readonly IWebHostEnvironment _WebHostEnvironment;
        public tspartController(ItspartService tspartService, IWebHostEnvironment WebHostEnvironment) : base(tspartService, WebHostEnvironment)
        {
            _tspartService = tspartService;
            _WebHostEnvironment = WebHostEnvironment;
        }
        [HttpPost]
        [Route("A001SaveAsync")]
        public virtual async Task<tspartTranfer> A001SaveAsync()
        {
            tspartTranfer result = new tspartTranfer();
            try
            {
                result = JsonConvert.DeserializeObject<tspartTranfer>(Request.Form["data"]);
                result = await _tspartService.A001SaveAsync(result);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("A001GetByGROUPBYBOM_GRPToListAsync")]
        public virtual async Task<List<tspart>> A001GetByGROUPBYBOM_GRPToListAsync()
        {
            List<tspart> result = new List<tspart>();
            try
            {
                result = await _tspartService.A001GetByGROUPBYBOM_GRPToListAsync();
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("A001GetByGROUPBYPART_CARToListAsync")]
        public virtual async Task<List<tspart>> A001GetByGROUPBYPART_CARToListAsync()
        {
            List<tspart> result = new List<tspart>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _tspartService.A001GetByGROUPBYPART_CARToListAsync(baseParameter.ParentID.Value);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("A001GetByGROUPBYPART_FMLToListAsync")]
        public virtual async Task<List<tspart>> A001GetByGROUPBYPART_FMLToListAsync()
        {
            List<tspart> result = new List<tspart>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _tspartService.A001GetByGROUPBYPART_FMLToListAsync(baseParameter.ParentID.Value);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("A001GetBySearchToListAsync")]
        public virtual async Task<List<tspartTranfer>> A001GetBySearchToListAsync()
        {
            List<tspartTranfer> result = new List<tspartTranfer>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _tspartService.A001GetBySearchToListAsync(baseParameter.SearchString001, baseParameter.SearchString002, baseParameter.SearchString003, baseParameter.SearchString004, baseParameter.SearchString005, baseParameter.SearchString006);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
       
        [HttpPost]
        [Route("A001GetBySearchToExcelAsync")]
        public async Task<JsonResult> ReportAToaThuoc_MinhToExcelAsync()
        {
            string result = GlobalHelper.InitializationString;
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                List<tspartTranfer> List = new List<tspartTranfer>();
                List = await _tspartService.A001GetBySearchToListAsync(baseParameter.SearchString001, baseParameter.SearchString002, baseParameter.SearchString003, baseParameter.SearchString004, baseParameter.SearchString005, baseParameter.SearchString006);
                string fileName = @"PARTNO" + GlobalHelper.InitializationDateTimeCode + ".xlsx";
                var streamExport = new MemoryStream();
                InitializationA001GetBySearchToExcelAsync(List, streamExport);
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
        [HttpPost]
        [Route("A001GetBySearchToHTMLAsync")]
        public async Task<JsonResult> A001GetBySearchToHTMLAsync()
        {
            string result = GlobalHelper.InitializationString;
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                List<tspartTranfer> List = new List<tspartTranfer>();
                List = await _tspartService.A001GetBySearchToListAsync(baseParameter.SearchString001, baseParameter.SearchString002, baseParameter.SearchString003, baseParameter.SearchString004, baseParameter.SearchString005, baseParameter.SearchString006);
                string fileName = @"PARTNO" + GlobalHelper.InitializationDateTimeCode + ".html";
                string contentHTML = GlobalHelper.InitializationString;
                string physicalPathOpen = Path.Combine(_WebHostEnvironment.WebRootPath, GlobalHelper.Download, "PARTNO.html");
                using (FileStream fs = new FileStream(physicalPathOpen, FileMode.Open))
                {
                    using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                    {
                        contentHTML = r.ReadToEnd();
                    }
                }
                contentHTML = contentHTML.Replace("[Day]", GlobalHelper.InitializationDateTime.ToString("dd/MM/yyyy hh:mm:ss"));
                StringBuilder Detail = new StringBuilder();
                int stt = 0;
                foreach (tspartTranfer item in List)
                {
                    stt = stt + 1;
                    Detail.AppendLine(@"<tr>");
                    Detail.AppendLine(@"<td style='text-align: center;'>" + stt + "</td>");
                    Detail.AppendLine(@"<td>" + item.CODE + "</td>");
                    Detail.AppendLine(@"<td>" + item.PART_NO + "</td>");
                    Detail.AppendLine(@"<td>" + item.PART_SUPL + "</td>");
                    Detail.AppendLine(@"<td>" + item.PART_NAME + "</td>");
                    Detail.AppendLine(@"<td>" + item.BOM_GROUP + "</td>");
                    Detail.AppendLine(@"<td>" + item.MODEL + "</td>");
                    Detail.AppendLine(@"<td>" + item.PART_FamilyPC + "</td>");
                    Detail.AppendLine(@"<td>" + item.Packing_Unit + "</td>");
                    Detail.AppendLine(@"<td>" + item.Item_TypeK + "</td>");
                    Detail.AppendLine(@"<td>" + item.Item_TypeE + "</td>");
                    Detail.AppendLine(@"<td>" + item.Location + "</td>");
                    Detail.AppendLine(@"<td>" + item.PART_USE + "</td>");
                    Detail.AppendLine(@"<td>" + item.PART_ENCNO + "</td>");
                    Detail.AppendLine(@"<td>" + item.PART_ECN_DATE + "</td>");
                    Detail.AppendLine(@"<td>" + item.Creation_date + "</td>");
                    Detail.AppendLine(@"<td>" + item.Creation_User + "</td>");
                    Detail.AppendLine(@"<td>" + item.Update_Date + "</td>");
                    Detail.AppendLine(@"<td>" + item.UPDATE_USER + "</td>");
                    Detail.AppendLine(@"</tr>");
                }
                contentHTML = contentHTML.Replace("[Detail]", Detail.ToString());
                string physicalPathCreate = Path.Combine(_WebHostEnvironment.WebRootPath, GlobalHelper.Download, fileName);
                using (FileStream fs = new FileStream(physicalPathCreate, FileMode.Create))
                {
                    using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                    {
                        w.WriteLine(contentHTML);
                    }
                }
                result = GlobalHelper.APISite + "/" + GlobalHelper.Download + "/" + fileName;
            }
            catch (Exception ex)
            {
                result = ex.Message;
            }
            return Json(result);
        }
        private void InitializationA001GetBySearchToExcelAsync(List<tspartTranfer> list, MemoryStream streamExport)
        {
            using (var package = new ExcelPackage(streamExport))
            {
                var workSheet = package.Workbook.Worksheets.Add("PARTNO");
                int row = 1;
                int column = 1;
                workSheet.Cells[row, column].Value = "No";
                column = column + 1;
                workSheet.Cells[row, column].Value = "CODE";
                column = column + 1;
                workSheet.Cells[row, column].Value = "PART_NO";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Supplier PART NO";
                column = column + 1;
                workSheet.Cells[row, column].Value = "PART_NAME";
                column = column + 1;
                workSheet.Cells[row, column].Value = "BOM_GROUP";
                column = column + 1;
                workSheet.Cells[row, column].Value = "LINE (FA)";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Family (PC)";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Packing_Unit";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Item_Type (K)";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Item_Type (E)";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Location";
                column = column + 1;
                workSheet.Cells[row, column].Value = "PART_USE";
                column = column + 1;
                workSheet.Cells[row, column].Value = "PART_ENCNO";
                column = column + 1;
                workSheet.Cells[row, column].Value = "PART_ECN_DATE";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Creation_date";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Creation_User";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Update_Date";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Update_User";
                column = column + 1;

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
                foreach (tspartTranfer item in list)
                {
                    try
                    {
                        workSheet.Cells[row, 1].Value = stt;
                        workSheet.Cells[row, 1].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                        workSheet.Cells[row, 2].Value = item.CODE;
                        workSheet.Cells[row, 3].Value = item.PART_NO;
                        workSheet.Cells[row, 4].Value = item.PART_SUPL;
                        workSheet.Cells[row, 5].Value = item.PART_NAME;
                        workSheet.Cells[row, 6].Value = item.BOM_GROUP;
                        workSheet.Cells[row, 7].Value = item.MODEL;
                        workSheet.Cells[row, 8].Value = item.PART_FamilyPC;
                        workSheet.Cells[row, 9].Value = item.Packing_Unit;
                        workSheet.Cells[row, 10].Value = item.Item_TypeK;
                        workSheet.Cells[row, 11].Value = item.Item_TypeE;
                        workSheet.Cells[row, 12].Value = item.Location;
                        workSheet.Cells[row, 13].Value = item.PART_USE;
                        workSheet.Cells[row, 14].Value = item.PART_ENCNO;
                        workSheet.Cells[row, 15].Value = item.PART_ECN_DATE;
                        workSheet.Cells[row, 16].Value = item.Creation_date;
                        workSheet.Cells[row, 17].Value = item.Creation_User;
                        workSheet.Cells[row, 18].Value = item.Update_Date;
                        workSheet.Cells[row, 19].Value = item.UPDATE_USER;
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
        [HttpPost]
        [Route("A001TabPage2GetBySearchToListAsync")]
        public virtual async Task<List<tspart>> A001TabPage2GetBySearchToListAsync()
        {
            List<tspart> result = new List<tspart>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _tspartService.A001TabPage2GetBySearchToListAsync(baseParameter.SearchString, baseParameter.ParentID.Value);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
    }
}

