namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class torderlist_lplistController : BaseController<torderlist_lplist, Itorderlist_lplistService>
    {
    private readonly Itorderlist_lplistService _torderlist_lplistService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public torderlist_lplistController(Itorderlist_lplistService torderlist_lplistService, IWebHostEnvironment WebHostEnvironment) : base(torderlist_lplistService, WebHostEnvironment)
    {
    _torderlist_lplistService = torderlist_lplistService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

