namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tsnoticeController : BaseController<tsnotice, ItsnoticeService>
    {
    private readonly ItsnoticeService _tsnoticeService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tsnoticeController(ItsnoticeService tsnoticeService, IWebHostEnvironment WebHostEnvironment) : base(tsnoticeService, WebHostEnvironment)
    {
    _tsnoticeService = tsnoticeService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

