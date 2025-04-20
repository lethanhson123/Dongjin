namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tsnon_operController : BaseController<tsnon_oper, Itsnon_operService>
    {
        private readonly Itsnon_operService _tsnon_operService;
        private readonly IWebHostEnvironment _WebHostEnvironment;
        public tsnon_operController(Itsnon_operService tsnon_operService, IWebHostEnvironment WebHostEnvironment) : base(tsnon_operService, WebHostEnvironment)
        {
            _tsnon_operService = tsnon_operService;
            _WebHostEnvironment = WebHostEnvironment;
        }
        [HttpPost]
        [Route("C02_STOP_LoadAsync")]
        public virtual async Task<string> C02_STOP_LoadAsync()
        {
            string result = GlobalHelper.InitializationString;
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _tsnon_operService.C02_STOP_LoadAsync(baseParameter.Account, baseParameter.SearchString, baseParameter.SearchString001, baseParameter.Begin.Value);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
                result = message;
            }
            return result;
        }
        [HttpPost]
        [Route("C02_STOP_LoadToListAsync")]
        public virtual async Task<List<tsnon_oper>> C02_STOP_LoadToListAsync()
        {
            List<tsnon_oper> result = new List<tsnon_oper>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _tsnon_operService.C02_STOP_LoadToListAsync(baseParameter.Begin.Value);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
    }
}

