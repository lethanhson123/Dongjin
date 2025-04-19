namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class twtoolController : BaseController<twtool, ItwtoolService>
    {
    private readonly ItwtoolService _twtoolService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public twtoolController(ItwtoolService twtoolService, IWebHostEnvironment WebHostEnvironment) : base(twtoolService, WebHostEnvironment)
    {
    _twtoolService = twtoolService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

