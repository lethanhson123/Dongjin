namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class torderinspectionController : BaseController<torderinspection, ItorderinspectionService>
    {
    private readonly ItorderinspectionService _torderinspectionService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public torderinspectionController(ItorderinspectionService torderinspectionService, IWebHostEnvironment WebHostEnvironment) : base(torderinspectionService, WebHostEnvironment)
    {
    _torderinspectionService = torderinspectionService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

