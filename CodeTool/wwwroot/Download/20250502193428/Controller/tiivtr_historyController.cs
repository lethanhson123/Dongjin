namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tiivtr_historyController : BaseController<tiivtr_history, Itiivtr_historyService>
    {
    private readonly Itiivtr_historyService _tiivtr_historyService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tiivtr_historyController(Itiivtr_historyService tiivtr_historyService, IWebHostEnvironment WebHostEnvironment) : base(tiivtr_historyService, WebHostEnvironment)
    {
    _tiivtr_historyService = tiivtr_historyService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

