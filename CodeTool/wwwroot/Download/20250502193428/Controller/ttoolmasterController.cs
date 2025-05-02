namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
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

