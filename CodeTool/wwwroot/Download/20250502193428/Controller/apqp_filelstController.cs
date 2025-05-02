namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class apqp_filelstController : BaseController<apqp_filelst, Iapqp_filelstService>
    {
    private readonly Iapqp_filelstService _apqp_filelstService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public apqp_filelstController(Iapqp_filelstService apqp_filelstService, IWebHostEnvironment WebHostEnvironment) : base(apqp_filelstService, WebHostEnvironment)
    {
    _apqp_filelstService = apqp_filelstService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

