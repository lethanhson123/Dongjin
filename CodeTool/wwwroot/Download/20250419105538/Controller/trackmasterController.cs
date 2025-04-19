namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class trackmasterController : BaseController<trackmaster, ItrackmasterService>
    {
    private readonly ItrackmasterService _trackmasterService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public trackmasterController(ItrackmasterService trackmasterService, IWebHostEnvironment WebHostEnvironment) : base(trackmasterService, WebHostEnvironment)
    {
    _trackmasterService = trackmasterService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

