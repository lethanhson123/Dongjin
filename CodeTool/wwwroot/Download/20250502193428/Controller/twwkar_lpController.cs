namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class twwkar_lpController : BaseController<twwkar_lp, Itwwkar_lpService>
    {
    private readonly Itwwkar_lpService _twwkar_lpService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public twwkar_lpController(Itwwkar_lpService twwkar_lpService, IWebHostEnvironment WebHostEnvironment) : base(twwkar_lpService, WebHostEnvironment)
    {
    _twwkar_lpService = twwkar_lpService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

