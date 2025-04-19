namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class ttoolmasterController : BaseController<ttoolmaster, IttoolmasterService>
    {
    private readonly IttoolmasterService _ttoolmasterService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public ttoolmasterController(IttoolmasterService ttoolmasterService, IWebHostEnvironment WebHostEnvironment) : base(ttoolmasterService, WebHostEnvironment)
    {
    _ttoolmasterService = ttoolmasterService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

