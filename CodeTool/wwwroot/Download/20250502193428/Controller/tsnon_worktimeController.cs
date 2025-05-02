namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tsnon_worktimeController : BaseController<tsnon_worktime, Itsnon_worktimeService>
    {
    private readonly Itsnon_worktimeService _tsnon_worktimeService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tsnon_worktimeController(Itsnon_worktimeService tsnon_worktimeService, IWebHostEnvironment WebHostEnvironment) : base(tsnon_worktimeService, WebHostEnvironment)
    {
    _tsnon_worktimeService = tsnon_worktimeService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

