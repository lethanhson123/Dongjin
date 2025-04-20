namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tuser_logController : BaseController<tuser_log, Ituser_logService>
    {
        private readonly Ituser_logService _tuser_logService;
        private readonly IWebHostEnvironment _WebHostEnvironment;
        public tuser_logController(Ituser_logService tuser_logService, IWebHostEnvironment WebHostEnvironment) : base(tuser_logService, WebHostEnvironment)
        {
            _tuser_logService = tuser_logService;
            _WebHostEnvironment = WebHostEnvironment;
        }
        [HttpPost]
        [Route("C02TS_USERToListAsync")]
        public virtual async Task<List<tuser_log>> C02TS_USERToListAsync()
        {
            List<tuser_log> result = new List<tuser_log>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _tuser_logService.C02TS_USERToListAsync(baseParameter.SearchString, baseParameter.Account);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("C02TS_USERUSER_TIMEToListAsync")]
        public virtual async Task<List<tuser_log>> C02TS_USERUSER_TIMEToListAsync()
        {
            List<tuser_log> result = new List<tuser_log>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _tuser_logService.C02TS_USERUSER_TIMEToListAsync(baseParameter.SearchString);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
    }
}

