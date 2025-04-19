namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class tdpdmtim_delController : BaseController<tdpdmtim_del, Itdpdmtim_delService>
    {
    private readonly Itdpdmtim_delService _tdpdmtim_delService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tdpdmtim_delController(Itdpdmtim_delService tdpdmtim_delService, IWebHostEnvironment WebHostEnvironment) : base(tdpdmtim_delService, WebHostEnvironment)
    {
    _tdpdmtim_delService = tdpdmtim_delService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

