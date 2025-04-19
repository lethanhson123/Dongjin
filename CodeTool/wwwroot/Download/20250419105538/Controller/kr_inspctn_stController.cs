namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class kr_inspctn_stController : BaseController<kr_inspctn_st, Ikr_inspctn_stService>
    {
    private readonly Ikr_inspctn_stService _kr_inspctn_stService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public kr_inspctn_stController(Ikr_inspctn_stService kr_inspctn_stService, IWebHostEnvironment WebHostEnvironment) : base(kr_inspctn_stService, WebHostEnvironment)
    {
    _kr_inspctn_stService = kr_inspctn_stService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

