namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tsnon_oper_mitorController : BaseController<tsnon_oper_mitor, Itsnon_oper_mitorService>
    {
        private readonly Itsnon_oper_mitorService _tsnon_oper_mitorService;
        private readonly IWebHostEnvironment _WebHostEnvironment;
        public tsnon_oper_mitorController(Itsnon_oper_mitorService tsnon_oper_mitorService, IWebHostEnvironment WebHostEnvironment) : base(tsnon_oper_mitorService, WebHostEnvironment)
        {
            _tsnon_oper_mitorService = tsnon_oper_mitorService;
            _WebHostEnvironment = WebHostEnvironment;
        }
        [HttpPost]
        [Route("C02_LoadAsync")]
        public virtual async Task<string> C02_LoadAsync()
        {
            string result = GlobalHelper.InitializationString;
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _tsnon_oper_mitorService.C02_LoadAsync(baseParameter.SearchString);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
                result = message;
            }
            return result;
        }
    }
}

