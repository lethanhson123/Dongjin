namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tdpdotpl_etcController : BaseController<tdpdotpl_etc, Itdpdotpl_etcService>
    {
    private readonly Itdpdotpl_etcService _tdpdotpl_etcService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tdpdotpl_etcController(Itdpdotpl_etcService tdpdotpl_etcService, IWebHostEnvironment WebHostEnvironment) : base(tdpdotpl_etcService, WebHostEnvironment)
    {
    _tdpdotpl_etcService = tdpdotpl_etcService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

