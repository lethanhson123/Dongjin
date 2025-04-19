namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class apqp_mstlstController : BaseController<apqp_mstlst, Iapqp_mstlstService>
    {
    private readonly Iapqp_mstlstService _apqp_mstlstService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public apqp_mstlstController(Iapqp_mstlstService apqp_mstlstService, IWebHostEnvironment WebHostEnvironment) : base(apqp_mstlstService, WebHostEnvironment)
    {
    _apqp_mstlstService = apqp_mstlstService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

