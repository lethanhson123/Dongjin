namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class kr_tdpdotplController : BaseController<kr_tdpdotpl, Ikr_tdpdotplService>
    {
    private readonly Ikr_tdpdotplService _kr_tdpdotplService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public kr_tdpdotplController(Ikr_tdpdotplService kr_tdpdotplService, IWebHostEnvironment WebHostEnvironment) : base(kr_tdpdotplService, WebHostEnvironment)
    {
    _kr_tdpdotplService = kr_tdpdotplService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

