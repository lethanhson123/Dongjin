namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tmmtin_dmmController : BaseController<tmmtin_dmm, Itmmtin_dmmService>
    {
    private readonly Itmmtin_dmmService _tmmtin_dmmService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tmmtin_dmmController(Itmmtin_dmmService tmmtin_dmmService, IWebHostEnvironment WebHostEnvironment) : base(tmmtin_dmmService, WebHostEnvironment)
    {
    _tmmtin_dmmService = tmmtin_dmmService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

