namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class twwkar_spstController : BaseController<twwkar_spst, Itwwkar_spstService>
    {
    private readonly Itwwkar_spstService _twwkar_spstService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public twwkar_spstController(Itwwkar_spstService twwkar_spstService, IWebHostEnvironment WebHostEnvironment) : base(twwkar_spstService, WebHostEnvironment)
    {
    _twwkar_spstService = twwkar_spstService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

