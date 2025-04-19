namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class ttensilforceController : BaseController<ttensilforce, IttensilforceService>
    {
    private readonly IttensilforceService _ttensilforceService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public ttensilforceController(IttensilforceService ttensilforceService, IWebHostEnvironment WebHostEnvironment) : base(ttensilforceService, WebHostEnvironment)
    {
    _ttensilforceService = ttensilforceService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

