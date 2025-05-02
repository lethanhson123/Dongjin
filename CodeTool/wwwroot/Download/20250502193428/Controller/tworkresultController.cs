namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tworkresultController : BaseController<tworkresult, ItworkresultService>
    {
    private readonly ItworkresultService _tworkresultService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tworkresultController(ItworkresultService tworkresultService, IWebHostEnvironment WebHostEnvironment) : base(tworkresultService, WebHostEnvironment)
    {
    _tworkresultService = tworkresultService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

