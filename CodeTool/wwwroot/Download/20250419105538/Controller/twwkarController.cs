namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class twwkarController : BaseController<twwkar, ItwwkarService>
    {
    private readonly ItwwkarService _twwkarService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public twwkarController(ItwwkarService twwkarService, IWebHostEnvironment WebHostEnvironment) : base(twwkarService, WebHostEnvironment)
    {
    _twwkarService = twwkarService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

