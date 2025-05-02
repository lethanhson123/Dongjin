namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tsuser_requController : BaseController<tsuser_requ, Itsuser_requService>
    {
    private readonly Itsuser_requService _tsuser_requService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tsuser_requController(Itsuser_requService tsuser_requService, IWebHostEnvironment WebHostEnvironment) : base(tsuser_requService, WebHostEnvironment)
    {
    _tsuser_requService = tsuser_requService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

