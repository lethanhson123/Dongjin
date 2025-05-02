namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
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

