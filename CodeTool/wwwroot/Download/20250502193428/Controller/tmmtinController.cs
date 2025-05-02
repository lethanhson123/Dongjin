namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tmmtinController : BaseController<tmmtin, ItmmtinService>
    {
    private readonly ItmmtinService _tmmtinService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tmmtinController(ItmmtinService tmmtinService, IWebHostEnvironment WebHostEnvironment) : base(tmmtinService, WebHostEnvironment)
    {
    _tmmtinService = tmmtinService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

