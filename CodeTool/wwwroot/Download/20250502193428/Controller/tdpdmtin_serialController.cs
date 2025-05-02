namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tdpdmtin_serialController : BaseController<tdpdmtin_serial, Itdpdmtin_serialService>
    {
    private readonly Itdpdmtin_serialService _tdpdmtin_serialService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tdpdmtin_serialController(Itdpdmtin_serialService tdpdmtin_serialService, IWebHostEnvironment WebHostEnvironment) : base(tdpdmtin_serialService, WebHostEnvironment)
    {
    _tdpdmtin_serialService = tdpdmtin_serialService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

