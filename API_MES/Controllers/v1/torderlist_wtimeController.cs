namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class torderlist_wtimeController : BaseController<torderlist_wtime, Itorderlist_wtimeService>
    {
        private readonly Itorderlist_wtimeService _torderlist_wtimeService;
        private readonly IWebHostEnvironment _WebHostEnvironment;
        public torderlist_wtimeController(Itorderlist_wtimeService torderlist_wtimeService, IWebHostEnvironment WebHostEnvironment) : base(torderlist_wtimeService, WebHostEnvironment)
        {
            _torderlist_wtimeService = torderlist_wtimeService;
            _WebHostEnvironment = WebHostEnvironment;
        }
        [HttpPost]
        [Route("C02_STOP_SW_TIMEAsync")]
        public virtual async Task<string> C02_STOP_SW_TIMEAsync()
        {
            string result = GlobalHelper.InitializationString;
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _torderlist_wtimeService.C02_STOP_SW_TIMEAsync(baseParameter.Account, baseParameter.SearchString, baseParameter.SearchString001, baseParameter.SearchString002, baseParameter.Begin.Value);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
                result = message;
            }
            return result;
        }
        [HttpPost]
        [Route("C02_STOP_EW_TIMEAsync")]
        public virtual async Task<string> C02_STOP_EW_TIMEAsync()
        {
            string result = GlobalHelper.InitializationString;
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _torderlist_wtimeService.C02_STOP_EW_TIMEAsync(baseParameter.SearchString);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
                result = message;
            }
            return result;
        }
        [HttpPost]
        [Route("C02_STOP_SW_TIMEToListAsync")]
        public virtual async Task<List<torderlist_wtime>> C02_STOP_SW_TIMEToListAsync()
        {
            List<torderlist_wtime> result = new List<torderlist_wtime>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _torderlist_wtimeService.C02_STOP_SW_TIMEToListAsync(baseParameter.Begin.Value);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
    }
}

