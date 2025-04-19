namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tspart_ecnController : BaseController<tspart_ecn, Itspart_ecnService>
    {
        private readonly Itspart_ecnService _tspart_ecnService;
        private readonly IWebHostEnvironment _WebHostEnvironment;
        public tspart_ecnController(Itspart_ecnService tspart_ecnService, IWebHostEnvironment WebHostEnvironment) : base(tspart_ecnService, WebHostEnvironment)
        {
            _tspart_ecnService = tspart_ecnService;
            _WebHostEnvironment = WebHostEnvironment;
        }
        [HttpPost]
        [Route("A001TabPage2GetBySearchToListAsync")]
        public virtual async Task<List<tspart_ecnTranfer>> A001TabPage2GetBySearchToListAsync()
        {
            List<tspart_ecnTranfer> result = new List<tspart_ecnTranfer>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _tspart_ecnService.A001TabPage2GetBySearchToListAsync(baseParameter.ParentID.Value);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
    }
}

