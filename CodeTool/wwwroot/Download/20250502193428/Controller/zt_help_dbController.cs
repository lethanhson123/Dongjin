namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class zt_help_dbController : BaseController<zt_help_db, Izt_help_dbService>
    {
    private readonly Izt_help_dbService _zt_help_dbService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public zt_help_dbController(Izt_help_dbService zt_help_dbService, IWebHostEnvironment WebHostEnvironment) : base(zt_help_dbService, WebHostEnvironment)
    {
    _zt_help_dbService = zt_help_dbService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

