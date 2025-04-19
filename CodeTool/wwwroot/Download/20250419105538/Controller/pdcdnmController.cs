namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class pdcdnmController : BaseController<pdcdnm, IpdcdnmService>
    {
    private readonly IpdcdnmService _pdcdnmService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public pdcdnmController(IpdcdnmService pdcdnmService, IWebHostEnvironment WebHostEnvironment) : base(pdcdnmService, WebHostEnvironment)
    {
    _pdcdnmService = pdcdnmService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

