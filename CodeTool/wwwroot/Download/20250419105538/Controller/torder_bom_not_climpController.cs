namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class torder_bom_not_climpController : BaseController<torder_bom_not_climp, Itorder_bom_not_climpService>
    {
    private readonly Itorder_bom_not_climpService _torder_bom_not_climpService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public torder_bom_not_climpController(Itorder_bom_not_climpService torder_bom_not_climpService, IWebHostEnvironment WebHostEnvironment) : base(torder_bom_not_climpService, WebHostEnvironment)
    {
    _torder_bom_not_climpService = torder_bom_not_climpService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

