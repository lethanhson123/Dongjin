namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class xsetting_timeController : BaseController<xsetting_time, Ixsetting_timeService>
    {
    private readonly Ixsetting_timeService _xsetting_timeService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public xsetting_timeController(Ixsetting_timeService xsetting_timeService, IWebHostEnvironment WebHostEnvironment) : base(xsetting_timeService, WebHostEnvironment)
    {
    _xsetting_timeService = xsetting_timeService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

