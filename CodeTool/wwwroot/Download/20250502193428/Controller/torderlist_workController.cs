namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class torderlist_workController : BaseController<torderlist_work, Itorderlist_workService>
    {
    private readonly Itorderlist_workService _torderlist_workService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public torderlist_workController(Itorderlist_workService torderlist_workService, IWebHostEnvironment WebHostEnvironment) : base(torderlist_workService, WebHostEnvironment)
    {
    _torderlist_workService = torderlist_workService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

