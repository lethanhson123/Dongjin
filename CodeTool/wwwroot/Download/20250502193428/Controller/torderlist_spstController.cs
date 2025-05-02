namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class torderlist_spstController : BaseController<torderlist_spst, Itorderlist_spstService>
    {
    private readonly Itorderlist_spstService _torderlist_spstService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public torderlist_spstController(Itorderlist_spstService torderlist_spstService, IWebHostEnvironment WebHostEnvironment) : base(torderlist_spstService, WebHostEnvironment)
    {
    _torderlist_spstService = torderlist_spstService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

