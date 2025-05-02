namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class torder_lead_bomController : BaseController<torder_lead_bom, Itorder_lead_bomService>
    {
    private readonly Itorder_lead_bomService _torder_lead_bomService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public torder_lead_bomController(Itorder_lead_bomService torder_lead_bomService, IWebHostEnvironment WebHostEnvironment) : base(torder_lead_bomService, WebHostEnvironment)
    {
    _torder_lead_bomService = torder_lead_bomService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

