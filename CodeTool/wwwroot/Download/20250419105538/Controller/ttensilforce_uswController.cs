namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class ttensilforce_uswController : BaseController<ttensilforce_usw, Ittensilforce_uswService>
    {
    private readonly Ittensilforce_uswService _ttensilforce_uswService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public ttensilforce_uswController(Ittensilforce_uswService ttensilforce_uswService, IWebHostEnvironment WebHostEnvironment) : base(ttensilforce_uswService, WebHostEnvironment)
    {
    _ttensilforce_uswService = ttensilforce_uswService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

