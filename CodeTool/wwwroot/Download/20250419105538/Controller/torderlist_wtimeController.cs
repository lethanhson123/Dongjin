namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class torderlist_wtimeController : BaseController<torderlist_wtime, Itorderlist_wtimeService>
    {
    private readonly Itorderlist_wtimeService _torderlist_wtimeService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public torderlist_wtimeController(Itorderlist_wtimeService torderlist_wtimeService, IWebHostEnvironment WebHostEnvironment) : base(torderlist_wtimeService, WebHostEnvironment)
    {
    _torderlist_wtimeService = torderlist_wtimeService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

