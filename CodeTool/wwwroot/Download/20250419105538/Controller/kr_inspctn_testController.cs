namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class kr_inspctn_testController : BaseController<kr_inspctn_test, Ikr_inspctn_testService>
    {
    private readonly Ikr_inspctn_testService _kr_inspctn_testService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public kr_inspctn_testController(Ikr_inspctn_testService kr_inspctn_testService, IWebHostEnvironment WebHostEnvironment) : base(kr_inspctn_testService, WebHostEnvironment)
    {
    _kr_inspctn_testService = kr_inspctn_testService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

