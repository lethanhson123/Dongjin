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
    }
}

