namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tspart_ecnController : BaseController<tspart_ecn, Itspart_ecnService>
    {
    private readonly Itspart_ecnService _tspart_ecnService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tspart_ecnController(Itspart_ecnService tspart_ecnService, IWebHostEnvironment WebHostEnvironment) : base(tspart_ecnService, WebHostEnvironment)
    {
    _tspart_ecnService = tspart_ecnService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

