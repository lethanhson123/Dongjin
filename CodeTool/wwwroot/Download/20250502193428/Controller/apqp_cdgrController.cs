namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class apqp_cdgrController : BaseController<apqp_cdgr, Iapqp_cdgrService>
    {
    private readonly Iapqp_cdgrService _apqp_cdgrService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public apqp_cdgrController(Iapqp_cdgrService apqp_cdgrService, IWebHostEnvironment WebHostEnvironment) : base(apqp_cdgrService, WebHostEnvironment)
    {
    _apqp_cdgrService = apqp_cdgrService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

