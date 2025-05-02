namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tiivaj_leadController : BaseController<tiivaj_lead, Itiivaj_leadService>
    {
    private readonly Itiivaj_leadService _tiivaj_leadService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tiivaj_leadController(Itiivaj_leadService tiivaj_leadService, IWebHostEnvironment WebHostEnvironment) : base(tiivaj_leadService, WebHostEnvironment)
    {
    _tiivaj_leadService = tiivaj_leadService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

