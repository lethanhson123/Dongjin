namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
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

