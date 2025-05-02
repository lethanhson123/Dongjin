namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class torderlist_swController : BaseController<torderlist_sw, Itorderlist_swService>
    {
    private readonly Itorderlist_swService _torderlist_swService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public torderlist_swController(Itorderlist_swService torderlist_swService, IWebHostEnvironment WebHostEnvironment) : base(torderlist_swService, WebHostEnvironment)
    {
    _torderlist_swService = torderlist_swService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

