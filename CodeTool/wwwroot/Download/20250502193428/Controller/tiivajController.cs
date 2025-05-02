namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tiivajController : BaseController<tiivaj, ItiivajService>
    {
    private readonly ItiivajService _tiivajService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tiivajController(ItiivajService tiivajService, IWebHostEnvironment WebHostEnvironment) : base(tiivajService, WebHostEnvironment)
    {
    _tiivajService = tiivajService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

