namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class torderinspection_lpController : BaseController<torderinspection_lp, Itorderinspection_lpService>
    {
    private readonly Itorderinspection_lpService _torderinspection_lpService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public torderinspection_lpController(Itorderinspection_lpService torderinspection_lpService, IWebHostEnvironment WebHostEnvironment) : base(torderinspection_lpService, WebHostEnvironment)
    {
    _torderinspection_lpService = torderinspection_lpService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

