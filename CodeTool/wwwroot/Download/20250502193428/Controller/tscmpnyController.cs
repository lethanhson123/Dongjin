namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tscmpnyController : BaseController<tscmpny, ItscmpnyService>
    {
    private readonly ItscmpnyService _tscmpnyService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tscmpnyController(ItscmpnyService tscmpnyService, IWebHostEnvironment WebHostEnvironment) : base(tscmpnyService, WebHostEnvironment)
    {
    _tscmpnyService = tscmpnyService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

