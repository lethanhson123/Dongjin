namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class aatableController : BaseController<aatable, IaatableService>
    {
    private readonly IaatableService _aatableService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public aatableController(IaatableService aatableService, IWebHostEnvironment WebHostEnvironment) : base(aatableService, WebHostEnvironment)
    {
    _aatableService = aatableService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

