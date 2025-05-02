namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tdpdmtim_locController : BaseController<tdpdmtim_loc, Itdpdmtim_locService>
    {
    private readonly Itdpdmtim_locService _tdpdmtim_locService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tdpdmtim_locController(Itdpdmtim_locService tdpdmtim_locService, IWebHostEnvironment WebHostEnvironment) : base(tdpdmtim_locService, WebHostEnvironment)
    {
    _tdpdmtim_locService = tdpdmtim_locService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

