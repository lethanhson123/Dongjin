namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class tsnon_oper_mitorController : BaseController<tsnon_oper_mitor, Itsnon_oper_mitorService>
    {
    private readonly Itsnon_oper_mitorService _tsnon_oper_mitorService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tsnon_oper_mitorController(Itsnon_oper_mitorService tsnon_oper_mitorService, IWebHostEnvironment WebHostEnvironment) : base(tsnon_oper_mitorService, WebHostEnvironment)
    {
    _tsnon_oper_mitorService = tsnon_oper_mitorService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

