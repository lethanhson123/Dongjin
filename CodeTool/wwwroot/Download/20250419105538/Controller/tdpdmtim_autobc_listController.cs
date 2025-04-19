namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class tdpdmtim_autobc_listController : BaseController<tdpdmtim_autobc_list, Itdpdmtim_autobc_listService>
    {
    private readonly Itdpdmtim_autobc_listService _tdpdmtim_autobc_listService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tdpdmtim_autobc_listController(Itdpdmtim_autobc_listService tdpdmtim_autobc_listService, IWebHostEnvironment WebHostEnvironment) : base(tdpdmtim_autobc_listService, WebHostEnvironment)
    {
    _tdpdmtim_autobc_listService = tdpdmtim_autobc_listService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

