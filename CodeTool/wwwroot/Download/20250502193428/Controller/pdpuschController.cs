namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class pdpuschController : BaseController<pdpusch, IpdpuschService>
    {
    private readonly IpdpuschService _pdpuschService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public pdpuschController(IpdpuschService pdpuschService, IWebHostEnvironment WebHostEnvironment) : base(pdpuschService, WebHostEnvironment)
    {
    _pdpuschService = pdpuschService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

