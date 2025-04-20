namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tsnon_oper_andon_listController : BaseController<tsnon_oper_andon_list, Itsnon_oper_andon_listService>
    {
        private readonly Itsnon_oper_andon_listService _tsnon_oper_andon_listService;
        private readonly IWebHostEnvironment _WebHostEnvironment;
        public tsnon_oper_andon_listController(Itsnon_oper_andon_listService tsnon_oper_andon_listService, IWebHostEnvironment WebHostEnvironment) : base(tsnon_oper_andon_listService, WebHostEnvironment)
        {
            _tsnon_oper_andon_listService = tsnon_oper_andon_listService;
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
                result = await _tsnon_oper_andon_listService.C02_STOP_LoadAsync(baseParameter.Account, baseParameter.SearchString);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
                result = message;
            }
            return result;
        }
        [HttpPost]
        [Route("C02_STOP_Button2_ClickAsync")]
        public virtual async Task<string> C02_STOP_Button2_ClickAsync()
        {
            string result = GlobalHelper.InitializationString;
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _tsnon_oper_andon_listService.C02_STOP_Button2_ClickAsync(baseParameter.Account, baseParameter.SearchString);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
                result = message;
            }
            return result;
        }
        [HttpPost]
        [Route("C02_STOP_Button1_ClickAsync")]
        public virtual async Task<string> C02_STOP_Button1_ClickAsync()
        {
            string result = GlobalHelper.InitializationString;
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _tsnon_oper_andon_listService.C02_STOP_Button1_ClickAsync(baseParameter.Account, baseParameter.SearchString);
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

