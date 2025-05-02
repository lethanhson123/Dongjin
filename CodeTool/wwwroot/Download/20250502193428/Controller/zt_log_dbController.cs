namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class zt_log_dbController : BaseController<zt_log_db, Izt_log_dbService>
    {
    private readonly Izt_log_dbService _zt_log_dbService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public zt_log_dbController(Izt_log_dbService zt_log_dbService, IWebHostEnvironment WebHostEnvironment) : base(zt_log_dbService, WebHostEnvironment)
    {
    _zt_log_dbService = zt_log_dbService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

