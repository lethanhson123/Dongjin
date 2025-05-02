namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tdpdotpl_tmpController : BaseController<tdpdotpl_tmp, Itdpdotpl_tmpService>
    {
    private readonly Itdpdotpl_tmpService _tdpdotpl_tmpService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tdpdotpl_tmpController(Itdpdotpl_tmpService tdpdotpl_tmpService, IWebHostEnvironment WebHostEnvironment) : base(tdpdotpl_tmpService, WebHostEnvironment)
    {
    _tdpdotpl_tmpService = tdpdotpl_tmpService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

