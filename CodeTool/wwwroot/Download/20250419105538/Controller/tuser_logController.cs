namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class tuser_logController : BaseController<tuser_log, Ituser_logService>
    {
    private readonly Ituser_logService _tuser_logService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tuser_logController(Ituser_logService tuser_logService, IWebHostEnvironment WebHostEnvironment) : base(tuser_logService, WebHostEnvironment)
    {
    _tuser_logService = tuser_logService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

