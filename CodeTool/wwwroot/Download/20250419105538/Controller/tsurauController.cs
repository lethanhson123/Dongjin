namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class tsurauController : BaseController<tsurau, ItsurauService>
    {
    private readonly ItsurauService _tsurauService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tsurauController(ItsurauService tsurauService, IWebHostEnvironment WebHostEnvironment) : base(tsurauService, WebHostEnvironment)
    {
    _tsurauService = tsurauService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

