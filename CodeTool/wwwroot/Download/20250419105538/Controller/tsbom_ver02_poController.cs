namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class tsbom_ver02_poController : BaseController<tsbom_ver02_po, Itsbom_ver02_poService>
    {
    private readonly Itsbom_ver02_poService _tsbom_ver02_poService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tsbom_ver02_poController(Itsbom_ver02_poService tsbom_ver02_poService, IWebHostEnvironment WebHostEnvironment) : base(tsbom_ver02_poService, WebHostEnvironment)
    {
    _tsbom_ver02_poService = tsbom_ver02_poService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

