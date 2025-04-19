namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class tdpdotplController : BaseController<tdpdotpl, ItdpdotplService>
    {
    private readonly ItdpdotplService _tdpdotplService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tdpdotplController(ItdpdotplService tdpdotplService, IWebHostEnvironment WebHostEnvironment) : base(tdpdotplService, WebHostEnvironment)
    {
    _tdpdotplService = tdpdotplService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

