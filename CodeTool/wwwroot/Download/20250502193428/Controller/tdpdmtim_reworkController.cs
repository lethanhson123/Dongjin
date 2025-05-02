namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tdpdmtim_reworkController : BaseController<tdpdmtim_rework, Itdpdmtim_reworkService>
    {
    private readonly Itdpdmtim_reworkService _tdpdmtim_reworkService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tdpdmtim_reworkController(Itdpdmtim_reworkService tdpdmtim_reworkService, IWebHostEnvironment WebHostEnvironment) : base(tdpdmtim_reworkService, WebHostEnvironment)
    {
    _tdpdmtim_reworkService = tdpdmtim_reworkService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

