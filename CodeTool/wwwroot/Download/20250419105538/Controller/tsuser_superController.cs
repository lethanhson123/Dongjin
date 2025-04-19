namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class tsuser_superController : BaseController<tsuser_super, Itsuser_superService>
    {
    private readonly Itsuser_superService _tsuser_superService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tsuser_superController(Itsuser_superService tsuser_superService, IWebHostEnvironment WebHostEnvironment) : base(tsuser_superService, WebHostEnvironment)
    {
    _tsuser_superService = tsuser_superService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

