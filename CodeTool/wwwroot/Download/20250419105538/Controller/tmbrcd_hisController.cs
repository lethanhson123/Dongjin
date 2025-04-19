namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class tmbrcd_hisController : BaseController<tmbrcd_his, Itmbrcd_hisService>
    {
    private readonly Itmbrcd_hisService _tmbrcd_hisService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tmbrcd_hisController(Itmbrcd_hisService tmbrcd_hisService, IWebHostEnvironment WebHostEnvironment) : base(tmbrcd_hisService, WebHostEnvironment)
    {
    _tmbrcd_hisService = tmbrcd_hisService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

