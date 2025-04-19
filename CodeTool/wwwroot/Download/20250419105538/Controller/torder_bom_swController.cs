namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class torder_bom_swController : BaseController<torder_bom_sw, Itorder_bom_swService>
    {
    private readonly Itorder_bom_swService _torder_bom_swService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public torder_bom_swController(Itorder_bom_swService torder_bom_swService, IWebHostEnvironment WebHostEnvironment) : base(torder_bom_swService, WebHostEnvironment)
    {
    _torder_bom_swService = torder_bom_swService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

