namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tsbom_listController : BaseController<tsbom_list, Itsbom_listService>
    {
    private readonly Itsbom_listService _tsbom_listService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tsbom_listController(Itsbom_listService tsbom_listService, IWebHostEnvironment WebHostEnvironment) : base(tsbom_listService, WebHostEnvironment)
    {
    _tsbom_listService = tsbom_listService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

