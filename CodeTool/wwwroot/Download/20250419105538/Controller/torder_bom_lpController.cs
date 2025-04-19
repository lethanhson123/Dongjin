namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class torder_bom_lpController : BaseController<torder_bom_lp, Itorder_bom_lpService>
    {
    private readonly Itorder_bom_lpService _torder_bom_lpService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public torder_bom_lpController(Itorder_bom_lpService torder_bom_lpService, IWebHostEnvironment WebHostEnvironment) : base(torder_bom_lpService, WebHostEnvironment)
    {
    _torder_bom_lpService = torder_bom_lpService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

