namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class pdcmpnyController : BaseController<pdcmpny, IpdcmpnyService>
    {
    private readonly IpdcmpnyService _pdcmpnyService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public pdcmpnyController(IpdcmpnyService pdcmpnyService, IWebHostEnvironment WebHostEnvironment) : base(pdcmpnyService, WebHostEnvironment)
    {
    _pdcmpnyService = pdcmpnyService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

