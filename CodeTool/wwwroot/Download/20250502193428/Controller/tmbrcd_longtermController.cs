namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tmbrcd_longtermController : BaseController<tmbrcd_longterm, Itmbrcd_longtermService>
    {
    private readonly Itmbrcd_longtermService _tmbrcd_longtermService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tmbrcd_longtermController(Itmbrcd_longtermService tmbrcd_longtermService, IWebHostEnvironment WebHostEnvironment) : base(tmbrcd_longtermService, WebHostEnvironment)
    {
    _tmbrcd_longtermService = tmbrcd_longtermService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

