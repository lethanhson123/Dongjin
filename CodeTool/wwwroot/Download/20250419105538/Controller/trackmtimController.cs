namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class trackmtimController : BaseController<trackmtim, ItrackmtimService>
    {
    private readonly ItrackmtimService _trackmtimService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public trackmtimController(ItrackmtimService trackmtimService, IWebHostEnvironment WebHostEnvironment) : base(trackmtimService, WebHostEnvironment)
    {
    _trackmtimService = trackmtimService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

