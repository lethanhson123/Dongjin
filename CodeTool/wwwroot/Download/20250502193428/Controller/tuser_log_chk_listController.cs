namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tuser_log_chk_listController : BaseController<tuser_log_chk_list, Ituser_log_chk_listService>
    {
    private readonly Ituser_log_chk_listService _tuser_log_chk_listService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tuser_log_chk_listController(Ituser_log_chk_listService tuser_log_chk_listService, IWebHostEnvironment WebHostEnvironment) : base(tuser_log_chk_listService, WebHostEnvironment)
    {
    _tuser_log_chk_listService = tuser_log_chk_listService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

