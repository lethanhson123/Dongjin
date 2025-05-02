namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tfg_monitorController : BaseController<tfg_monitor, Itfg_monitorService>
    {
    private readonly Itfg_monitorService _tfg_monitorService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tfg_monitorController(Itfg_monitorService tfg_monitorService, IWebHostEnvironment WebHostEnvironment) : base(tfg_monitorService, WebHostEnvironment)
    {
    _tfg_monitorService = tfg_monitorService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

