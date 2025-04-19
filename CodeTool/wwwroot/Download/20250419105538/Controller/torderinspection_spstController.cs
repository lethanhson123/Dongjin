namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class torderinspection_spstController : BaseController<torderinspection_spst, Itorderinspection_spstService>
    {
    private readonly Itorderinspection_spstService _torderinspection_spstService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public torderinspection_spstController(Itorderinspection_spstService torderinspection_spstService, IWebHostEnvironment WebHostEnvironment) : base(torderinspection_spstService, WebHostEnvironment)
    {
    _torderinspection_spstService = torderinspection_spstService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

