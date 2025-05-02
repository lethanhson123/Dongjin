namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class torderlist_lpController : BaseController<torderlist_lp, Itorderlist_lpService>
    {
    private readonly Itorderlist_lpService _torderlist_lpService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public torderlist_lpController(Itorderlist_lpService torderlist_lpService, IWebHostEnvironment WebHostEnvironment) : base(torderlist_lpService, WebHostEnvironment)
    {
    _torderlist_lpService = torderlist_lpService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

