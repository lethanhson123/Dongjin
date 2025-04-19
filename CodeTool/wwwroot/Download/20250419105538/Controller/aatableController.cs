namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
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

