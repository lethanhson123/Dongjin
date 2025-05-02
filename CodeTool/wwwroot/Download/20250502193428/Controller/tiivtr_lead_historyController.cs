namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tiivtr_lead_historyController : BaseController<tiivtr_lead_history, Itiivtr_lead_historyService>
    {
    private readonly Itiivtr_lead_historyService _tiivtr_lead_historyService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tiivtr_lead_historyController(Itiivtr_lead_historyService tiivtr_lead_historyService, IWebHostEnvironment WebHostEnvironment) : base(tiivtr_lead_historyService, WebHostEnvironment)
    {
    _tiivtr_lead_historyService = tiivtr_lead_historyService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

