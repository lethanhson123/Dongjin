namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class tmmtin_dmm_cutController : BaseController<tmmtin_dmm_cut, Itmmtin_dmm_cutService>
    {
    private readonly Itmmtin_dmm_cutService _tmmtin_dmm_cutService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tmmtin_dmm_cutController(Itmmtin_dmm_cutService tmmtin_dmm_cutService, IWebHostEnvironment WebHostEnvironment) : base(tmmtin_dmm_cutService, WebHostEnvironment)
    {
    _tmmtin_dmm_cutService = tmmtin_dmm_cutService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

