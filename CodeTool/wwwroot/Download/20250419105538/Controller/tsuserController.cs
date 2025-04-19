namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class tsuserController : BaseController<tsuser, ItsuserService>
    {
    private readonly ItsuserService _tsuserService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tsuserController(ItsuserService tsuserService, IWebHostEnvironment WebHostEnvironment) : base(tsuserService, WebHostEnvironment)
    {
    _tsuserService = tsuserService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

