namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class tmbrcdController : BaseController<tmbrcd, ItmbrcdService>
    {
    private readonly ItmbrcdService _tmbrcdService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tmbrcdController(ItmbrcdService tmbrcdService, IWebHostEnvironment WebHostEnvironment) : base(tmbrcdService, WebHostEnvironment)
    {
    _tmbrcdService = tmbrcdService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

