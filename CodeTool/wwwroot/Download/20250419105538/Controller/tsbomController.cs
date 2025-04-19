namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class tsbomController : BaseController<tsbom, ItsbomService>
    {
    private readonly ItsbomService _tsbomService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tsbomController(ItsbomService tsbomService, IWebHostEnvironment WebHostEnvironment) : base(tsbomService, WebHostEnvironment)
    {
    _tsbomService = tsbomService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

