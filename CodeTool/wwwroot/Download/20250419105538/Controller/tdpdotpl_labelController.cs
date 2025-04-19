namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class tdpdotpl_labelController : BaseController<tdpdotpl_label, Itdpdotpl_labelService>
    {
    private readonly Itdpdotpl_labelService _tdpdotpl_labelService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tdpdotpl_labelController(Itdpdotpl_labelService tdpdotpl_labelService, IWebHostEnvironment WebHostEnvironment) : base(tdpdotpl_labelService, WebHostEnvironment)
    {
    _tdpdotpl_labelService = tdpdotpl_labelService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

