namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class kr_tdd_poplanController : BaseController<kr_tdd_poplan, Ikr_tdd_poplanService>
    {
    private readonly Ikr_tdd_poplanService _kr_tdd_poplanService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public kr_tdd_poplanController(Ikr_tdd_poplanService kr_tdd_poplanService, IWebHostEnvironment WebHostEnvironment) : base(kr_tdd_poplanService, WebHostEnvironment)
    {
    _kr_tdd_poplanService = kr_tdd_poplanService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

