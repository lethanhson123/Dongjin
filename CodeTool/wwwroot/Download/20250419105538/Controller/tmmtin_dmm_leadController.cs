namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class tmmtin_dmm_leadController : BaseController<tmmtin_dmm_lead, Itmmtin_dmm_leadService>
    {
    private readonly Itmmtin_dmm_leadService _tmmtin_dmm_leadService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tmmtin_dmm_leadController(Itmmtin_dmm_leadService tmmtin_dmm_leadService, IWebHostEnvironment WebHostEnvironment) : base(tmmtin_dmm_leadService, WebHostEnvironment)
    {
    _tmmtin_dmm_leadService = tmmtin_dmm_leadService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

