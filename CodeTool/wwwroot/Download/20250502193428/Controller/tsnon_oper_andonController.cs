namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tsnon_oper_andonController : BaseController<tsnon_oper_andon, Itsnon_oper_andonService>
    {
    private readonly Itsnon_oper_andonService _tsnon_oper_andonService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tsnon_oper_andonController(Itsnon_oper_andonService tsnon_oper_andonService, IWebHostEnvironment WebHostEnvironment) : base(tsnon_oper_andonService, WebHostEnvironment)
    {
    _tsnon_oper_andonService = tsnon_oper_andonService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

