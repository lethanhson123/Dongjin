namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class tdpdmtim_histController : BaseController<tdpdmtim_hist, Itdpdmtim_histService>
    {
    private readonly Itdpdmtim_histService _tdpdmtim_histService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tdpdmtim_histController(Itdpdmtim_histService tdpdmtim_histService, IWebHostEnvironment WebHostEnvironment) : base(tdpdmtim_histService, WebHostEnvironment)
    {
    _tdpdmtim_histService = tdpdmtim_histService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

