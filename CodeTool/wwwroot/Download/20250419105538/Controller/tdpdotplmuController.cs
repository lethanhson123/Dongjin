namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class tdpdotplmuController : BaseController<tdpdotplmu, ItdpdotplmuService>
    {
    private readonly ItdpdotplmuService _tdpdotplmuService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tdpdotplmuController(ItdpdotplmuService tdpdotplmuService, IWebHostEnvironment WebHostEnvironment) : base(tdpdotplmuService, WebHostEnvironment)
    {
    _tdpdotplmuService = tdpdotplmuService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

