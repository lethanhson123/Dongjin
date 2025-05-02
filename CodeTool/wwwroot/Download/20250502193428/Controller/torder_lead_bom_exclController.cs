namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class torder_lead_bom_exclController : BaseController<torder_lead_bom_excl, Itorder_lead_bom_exclService>
    {
    private readonly Itorder_lead_bom_exclService _torder_lead_bom_exclService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public torder_lead_bom_exclController(Itorder_lead_bom_exclService torder_lead_bom_exclService, IWebHostEnvironment WebHostEnvironment) : base(torder_lead_bom_exclService, WebHostEnvironment)
    {
    _torder_lead_bom_exclService = torder_lead_bom_exclService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

