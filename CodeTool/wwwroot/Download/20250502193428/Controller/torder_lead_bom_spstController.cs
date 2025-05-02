namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class torder_lead_bom_spstController : BaseController<torder_lead_bom_spst, Itorder_lead_bom_spstService>
    {
    private readonly Itorder_lead_bom_spstService _torder_lead_bom_spstService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public torder_lead_bom_spstController(Itorder_lead_bom_spstService torder_lead_bom_spstService, IWebHostEnvironment WebHostEnvironment) : base(torder_lead_bom_spstService, WebHostEnvironment)
    {
    _torder_lead_bom_spstService = torder_lead_bom_spstService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

