namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class ttc_rackmtinController : BaseController<ttc_rackmtin, Ittc_rackmtinService>
    {
    private readonly Ittc_rackmtinService _ttc_rackmtinService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public ttc_rackmtinController(Ittc_rackmtinService ttc_rackmtinService, IWebHostEnvironment WebHostEnvironment) : base(ttc_rackmtinService, WebHostEnvironment)
    {
    _ttc_rackmtinService = ttc_rackmtinService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

