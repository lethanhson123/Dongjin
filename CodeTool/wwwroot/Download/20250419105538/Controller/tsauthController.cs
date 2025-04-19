namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class tsauthController : BaseController<tsauth, ItsauthService>
    {
    private readonly ItsauthService _tsauthService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tsauthController(ItsauthService tsauthService, IWebHostEnvironment WebHostEnvironment) : base(tsauthService, WebHostEnvironment)
    {
    _tsauthService = tsauthService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

