namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class torder_bomController : BaseController<torder_bom, Itorder_bomService>
    {
    private readonly Itorder_bomService _torder_bomService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public torder_bomController(Itorder_bomService torder_bomService, IWebHostEnvironment WebHostEnvironment) : base(torder_bomService, WebHostEnvironment)
    {
    _torder_bomService = torder_bomService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

