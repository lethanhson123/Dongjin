namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class tsnon_oper_workerController : BaseController<tsnon_oper_worker, Itsnon_oper_workerService>
    {
    private readonly Itsnon_oper_workerService _tsnon_oper_workerService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tsnon_oper_workerController(Itsnon_oper_workerService tsnon_oper_workerService, IWebHostEnvironment WebHostEnvironment) : base(tsnon_oper_workerService, WebHostEnvironment)
    {
    _tsnon_oper_workerService = tsnon_oper_workerService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

