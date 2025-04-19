namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class torderinspection_swController : BaseController<torderinspection_sw, Itorderinspection_swService>
    {
    private readonly Itorderinspection_swService _torderinspection_swService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public torderinspection_swController(Itorderinspection_swService torderinspection_swService, IWebHostEnvironment WebHostEnvironment) : base(torderinspection_swService, WebHostEnvironment)
    {
    _torderinspection_swService = torderinspection_swService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

