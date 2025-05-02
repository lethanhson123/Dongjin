namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class kr_tdpdotpl_inpoController : BaseController<kr_tdpdotpl_inpo, Ikr_tdpdotpl_inpoService>
    {
    private readonly Ikr_tdpdotpl_inpoService _kr_tdpdotpl_inpoService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public kr_tdpdotpl_inpoController(Ikr_tdpdotpl_inpoService kr_tdpdotpl_inpoService, IWebHostEnvironment WebHostEnvironment) : base(kr_tdpdotpl_inpoService, WebHostEnvironment)
    {
    _kr_tdpdotpl_inpoService = kr_tdpdotpl_inpoService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

