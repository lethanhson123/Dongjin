namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class tiivtr_lead_fgController : BaseController<tiivtr_lead_fg, Itiivtr_lead_fgService>
    {
    private readonly Itiivtr_lead_fgService _tiivtr_lead_fgService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tiivtr_lead_fgController(Itiivtr_lead_fgService tiivtr_lead_fgService, IWebHostEnvironment WebHostEnvironment) : base(tiivtr_lead_fgService, WebHostEnvironment)
    {
    _tiivtr_lead_fgService = tiivtr_lead_fgService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

