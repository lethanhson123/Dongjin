namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class tdd_poplan_djgController : BaseController<tdd_poplan_djg, Itdd_poplan_djgService>
    {
    private readonly Itdd_poplan_djgService _tdd_poplan_djgService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tdd_poplan_djgController(Itdd_poplan_djgService tdd_poplan_djgService, IWebHostEnvironment WebHostEnvironment) : base(tdd_poplan_djgService, WebHostEnvironment)
    {
    _tdd_poplan_djgService = tdd_poplan_djgService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

