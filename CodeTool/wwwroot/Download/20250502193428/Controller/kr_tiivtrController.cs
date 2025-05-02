namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class kr_tiivtrController : BaseController<kr_tiivtr, Ikr_tiivtrService>
    {
    private readonly Ikr_tiivtrService _kr_tiivtrService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public kr_tiivtrController(Ikr_tiivtrService kr_tiivtrService, IWebHostEnvironment WebHostEnvironment) : base(kr_tiivtrService, WebHostEnvironment)
    {
    _kr_tiivtrService = kr_tiivtrService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

