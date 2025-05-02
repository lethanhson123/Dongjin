namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class zz_mes_verController : BaseController<zz_mes_ver, Izz_mes_verService>
    {
    private readonly Izz_mes_verService _zz_mes_verService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public zz_mes_verController(Izz_mes_verService zz_mes_verService, IWebHostEnvironment WebHostEnvironment) : base(zz_mes_verService, WebHostEnvironment)
    {
    _zz_mes_verService = zz_mes_verService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

