namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class tiivtrController : BaseController<tiivtr, ItiivtrService>
    {
    private readonly ItiivtrService _tiivtrService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tiivtrController(ItiivtrService tiivtrService, IWebHostEnvironment WebHostEnvironment) : base(tiivtrService, WebHostEnvironment)
    {
    _tiivtrService = tiivtrService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

