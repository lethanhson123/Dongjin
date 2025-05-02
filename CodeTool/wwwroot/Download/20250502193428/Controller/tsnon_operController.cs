namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tsnon_operController : BaseController<tsnon_oper, Itsnon_operService>
    {
    private readonly Itsnon_operService _tsnon_operService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tsnon_operController(Itsnon_operService tsnon_operService, IWebHostEnvironment WebHostEnvironment) : base(tsnon_operService, WebHostEnvironment)
    {
    _tsnon_operService = tsnon_operService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

