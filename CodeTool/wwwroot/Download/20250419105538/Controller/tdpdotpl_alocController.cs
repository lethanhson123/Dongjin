namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class tdpdotpl_alocController : BaseController<tdpdotpl_aloc, Itdpdotpl_alocService>
    {
    private readonly Itdpdotpl_alocService _tdpdotpl_alocService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tdpdotpl_alocController(Itdpdotpl_alocService tdpdotpl_alocService, IWebHostEnvironment WebHostEnvironment) : base(tdpdotpl_alocService, WebHostEnvironment)
    {
    _tdpdotpl_alocService = tdpdotpl_alocService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

