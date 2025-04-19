namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class torderlistController : BaseController<torderlist, ItorderlistService>
    {
    private readonly ItorderlistService _torderlistService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public torderlistController(ItorderlistService torderlistService, IWebHostEnvironment WebHostEnvironment) : base(torderlistService, WebHostEnvironment)
    {
    _torderlistService = torderlistService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

