namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class apqp_dlylstController : BaseController<apqp_dlylst, Iapqp_dlylstService>
    {
    private readonly Iapqp_dlylstService _apqp_dlylstService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public apqp_dlylstController(Iapqp_dlylstService apqp_dlylstService, IWebHostEnvironment WebHostEnvironment) : base(apqp_dlylstService, WebHostEnvironment)
    {
    _apqp_dlylstService = apqp_dlylstService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

