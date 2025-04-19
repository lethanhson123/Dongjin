namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class tiivaj_historyController : BaseController<tiivaj_history, Itiivaj_historyService>
    {
    private readonly Itiivaj_historyService _tiivaj_historyService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tiivaj_historyController(Itiivaj_historyService tiivaj_historyService, IWebHostEnvironment WebHostEnvironment) : base(tiivaj_historyService, WebHostEnvironment)
    {
    _tiivaj_historyService = tiivaj_historyService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

