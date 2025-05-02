namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tsmonitor_setController : BaseController<tsmonitor_set, Itsmonitor_setService>
    {
    private readonly Itsmonitor_setService _tsmonitor_setService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tsmonitor_setController(Itsmonitor_setService tsmonitor_setService, IWebHostEnvironment WebHostEnvironment) : base(tsmonitor_setService, WebHostEnvironment)
    {
    _tsmonitor_setService = tsmonitor_setService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

