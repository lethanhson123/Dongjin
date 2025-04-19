namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class tdpdmtim_tmpController : BaseController<tdpdmtim_tmp, Itdpdmtim_tmpService>
    {
    private readonly Itdpdmtim_tmpService _tdpdmtim_tmpService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tdpdmtim_tmpController(Itdpdmtim_tmpService tdpdmtim_tmpService, IWebHostEnvironment WebHostEnvironment) : base(tdpdmtim_tmpService, WebHostEnvironment)
    {
    _tdpdmtim_tmpService = tdpdmtim_tmpService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

