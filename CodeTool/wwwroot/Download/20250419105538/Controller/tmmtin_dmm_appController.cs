namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class tmmtin_dmm_appController : BaseController<tmmtin_dmm_app, Itmmtin_dmm_appService>
    {
    private readonly Itmmtin_dmm_appService _tmmtin_dmm_appService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tmmtin_dmm_appController(Itmmtin_dmm_appService tmmtin_dmm_appService, IWebHostEnvironment WebHostEnvironment) : base(tmmtin_dmm_appService, WebHostEnvironment)
    {
    _tmmtin_dmm_appService = tmmtin_dmm_appService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

