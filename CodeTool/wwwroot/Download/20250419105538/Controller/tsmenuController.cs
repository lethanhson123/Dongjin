namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class tsmenuController : BaseController<tsmenu, ItsmenuService>
    {
    private readonly ItsmenuService _tsmenuService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tsmenuController(ItsmenuService tsmenuService, IWebHostEnvironment WebHostEnvironment) : base(tsmenuService, WebHostEnvironment)
    {
    _tsmenuService = tsmenuService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

