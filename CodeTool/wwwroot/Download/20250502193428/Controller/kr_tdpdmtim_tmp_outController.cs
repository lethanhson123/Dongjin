namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class kr_tdpdmtim_tmp_outController : BaseController<kr_tdpdmtim_tmp_out, Ikr_tdpdmtim_tmp_outService>
    {
    private readonly Ikr_tdpdmtim_tmp_outService _kr_tdpdmtim_tmp_outService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public kr_tdpdmtim_tmp_outController(Ikr_tdpdmtim_tmp_outService kr_tdpdmtim_tmp_outService, IWebHostEnvironment WebHostEnvironment) : base(kr_tdpdmtim_tmp_outService, WebHostEnvironment)
    {
    _kr_tdpdmtim_tmp_outService = kr_tdpdmtim_tmp_outService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

