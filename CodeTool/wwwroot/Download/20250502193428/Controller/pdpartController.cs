namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class pdpartController : BaseController<pdpart, IpdpartService>
    {
    private readonly IpdpartService _pdpartService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public pdpartController(IpdpartService pdpartService, IWebHostEnvironment WebHostEnvironment) : base(pdpartService, WebHostEnvironment)
    {
    _pdpartService = pdpartService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

