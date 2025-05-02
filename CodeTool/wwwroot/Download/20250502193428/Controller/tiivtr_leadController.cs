namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tiivtr_leadController : BaseController<tiivtr_lead, Itiivtr_leadService>
    {
    private readonly Itiivtr_leadService _tiivtr_leadService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tiivtr_leadController(Itiivtr_leadService tiivtr_leadService, IWebHostEnvironment WebHostEnvironment) : base(tiivtr_leadService, WebHostEnvironment)
    {
    _tiivtr_leadService = tiivtr_leadService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

