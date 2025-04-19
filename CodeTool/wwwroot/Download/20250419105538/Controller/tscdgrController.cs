namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class tscdgrController : BaseController<tscdgr, ItscdgrService>
    {
    private readonly ItscdgrService _tscdgrService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tscdgrController(ItscdgrService tscdgrService, IWebHostEnvironment WebHostEnvironment) : base(tscdgrService, WebHostEnvironment)
    {
    _tscdgrService = tscdgrService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

