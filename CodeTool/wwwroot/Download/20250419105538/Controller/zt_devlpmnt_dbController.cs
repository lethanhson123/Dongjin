namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class zt_devlpmnt_dbController : BaseController<zt_devlpmnt_db, Izt_devlpmnt_dbService>
    {
    private readonly Izt_devlpmnt_dbService _zt_devlpmnt_dbService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public zt_devlpmnt_dbController(Izt_devlpmnt_dbService zt_devlpmnt_dbService, IWebHostEnvironment WebHostEnvironment) : base(zt_devlpmnt_dbService, WebHostEnvironment)
    {
    _zt_devlpmnt_dbService = zt_devlpmnt_dbService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

