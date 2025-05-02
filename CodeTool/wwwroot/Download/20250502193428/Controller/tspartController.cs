namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tspartController : BaseController<tspart, ItspartService>
    {
    private readonly ItspartService _tspartService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tspartController(ItspartService tspartService, IWebHostEnvironment WebHostEnvironment) : base(tspartService, WebHostEnvironment)
    {
    _tspartService = tspartService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

