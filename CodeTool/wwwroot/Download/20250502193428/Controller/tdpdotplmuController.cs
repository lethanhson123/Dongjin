namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
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

