namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class kr_tdpdmtimController : BaseController<kr_tdpdmtim, Ikr_tdpdmtimService>
    {
    private readonly Ikr_tdpdmtimService _kr_tdpdmtimService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public kr_tdpdmtimController(Ikr_tdpdmtimService kr_tdpdmtimService, IWebHostEnvironment WebHostEnvironment) : base(kr_tdpdmtimService, WebHostEnvironment)
    {
    _kr_tdpdmtimService = kr_tdpdmtimService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

