namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tuser_log_chkController : BaseController<tuser_log_chk, Ituser_log_chkService>
    {
    private readonly Ituser_log_chkService _tuser_log_chkService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tuser_log_chkController(Ituser_log_chkService tuser_log_chkService, IWebHostEnvironment WebHostEnvironment) : base(tuser_log_chkService, WebHostEnvironment)
    {
    _tuser_log_chkService = tuser_log_chkService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

