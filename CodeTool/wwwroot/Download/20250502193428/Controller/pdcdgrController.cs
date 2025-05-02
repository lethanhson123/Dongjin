namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class pdcdgrController : BaseController<pdcdgr, IpdcdgrService>
    {
    private readonly IpdcdgrService _pdcdgrService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public pdcdgrController(IpdcdgrService pdcdgrService, IWebHostEnvironment WebHostEnvironment) : base(pdcdgrService, WebHostEnvironment)
    {
    _pdcdgrService = pdcdgrService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

