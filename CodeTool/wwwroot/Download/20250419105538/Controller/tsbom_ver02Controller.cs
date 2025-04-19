namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class tsbom_ver02Controller : BaseController<tsbom_ver02, Itsbom_ver02Service>
    {
    private readonly Itsbom_ver02Service _tsbom_ver02Service;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tsbom_ver02Controller(Itsbom_ver02Service tsbom_ver02Service, IWebHostEnvironment WebHostEnvironment) : base(tsbom_ver02Service, WebHostEnvironment)
    {
    _tsbom_ver02Service = tsbom_ver02Service;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

