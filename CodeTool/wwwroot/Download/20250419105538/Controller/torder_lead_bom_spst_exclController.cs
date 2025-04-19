namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class torder_lead_bom_spst_exclController : BaseController<torder_lead_bom_spst_excl, Itorder_lead_bom_spst_exclService>
    {
    private readonly Itorder_lead_bom_spst_exclService _torder_lead_bom_spst_exclService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public torder_lead_bom_spst_exclController(Itorder_lead_bom_spst_exclService torder_lead_bom_spst_exclService, IWebHostEnvironment WebHostEnvironment) : base(torder_lead_bom_spst_exclService, WebHostEnvironment)
    {
    _torder_lead_bom_spst_exclService = torder_lead_bom_spst_exclService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

