namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tscodeController : BaseController<tscode, ItscodeService>
    {
        private readonly ItscodeService _tscodeService;
        private readonly IWebHostEnvironment _WebHostEnvironment;
        public tscodeController(ItscodeService tscodeService, IWebHostEnvironment WebHostEnvironment) : base(tscodeService, WebHostEnvironment)
        {
            _tscodeService = tscodeService;
            _WebHostEnvironment = WebHostEnvironment;
        }
        [HttpPost]
        [Route("A001GetByCDGR_IDXToListAsync")]
        public virtual async Task<List<tscode>> A001GetByCDGR_IDXToListAsync()
        {
            List<tscode> result = new List<tscode>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _tscodeService.A001GetByCDGR_IDXToListAsync(baseParameter.ParentID.Value);
            }
            catch (Exception ex)
            {
                string message = ex.Message;                
            }
            return result;
        }
        [HttpPost]
        [Route("C02_LoadToListAsync")]
        public virtual async Task<List<tscode>> C02_LoadToListAsync()
        {
            List<tscode> result = new List<tscode>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _tscodeService.C02_LoadToListAsync(baseParameter.SearchString);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
    }
}

