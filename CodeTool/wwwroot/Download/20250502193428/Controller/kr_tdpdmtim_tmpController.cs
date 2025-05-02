namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class kr_tdpdmtim_tmpController : BaseController<kr_tdpdmtim_tmp, Ikr_tdpdmtim_tmpService>
    {
    private readonly Ikr_tdpdmtim_tmpService _kr_tdpdmtim_tmpService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public kr_tdpdmtim_tmpController(Ikr_tdpdmtim_tmpService kr_tdpdmtim_tmpService, IWebHostEnvironment WebHostEnvironment) : base(kr_tdpdmtim_tmpService, WebHostEnvironment)
    {
    _kr_tdpdmtim_tmpService = kr_tdpdmtim_tmpService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

