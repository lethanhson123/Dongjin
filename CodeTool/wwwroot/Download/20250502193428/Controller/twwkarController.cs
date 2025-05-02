namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
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

