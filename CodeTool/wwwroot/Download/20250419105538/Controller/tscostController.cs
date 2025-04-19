namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class tscostController : BaseController<tscost, ItscostService>
    {
    private readonly ItscostService _tscostService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tscostController(ItscostService tscostService, IWebHostEnvironment WebHostEnvironment) : base(tscostService, WebHostEnvironment)
    {
    _tscostService = tscostService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

