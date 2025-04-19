namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class tscost_listController : BaseController<tscost_list, Itscost_listService>
    {
    private readonly Itscost_listService _tscost_listService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tscost_listController(Itscost_listService tscost_listService, IWebHostEnvironment WebHostEnvironment) : base(tscost_listService, WebHostEnvironment)
    {
    _tscost_listService = tscost_listService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

