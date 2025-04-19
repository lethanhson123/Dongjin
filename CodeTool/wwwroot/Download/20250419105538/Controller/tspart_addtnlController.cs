namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class tspart_addtnlController : BaseController<tspart_addtnl, Itspart_addtnlService>
    {
    private readonly Itspart_addtnlService _tspart_addtnlService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tspart_addtnlController(Itspart_addtnlService tspart_addtnlService, IWebHostEnvironment WebHostEnvironment) : base(tspart_addtnlService, WebHostEnvironment)
    {
    _tspart_addtnlService = tspart_addtnlService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

