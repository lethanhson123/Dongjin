namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class ttoolhistoryController : BaseController<ttoolhistory, IttoolhistoryService>
    {
    private readonly IttoolhistoryService _ttoolhistoryService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public ttoolhistoryController(IttoolhistoryService ttoolhistoryService, IWebHostEnvironment WebHostEnvironment) : base(ttoolhistoryService, WebHostEnvironment)
    {
    _ttoolhistoryService = ttoolhistoryService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

