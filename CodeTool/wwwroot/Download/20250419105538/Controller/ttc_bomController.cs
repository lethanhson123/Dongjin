namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class ttc_bomController : BaseController<ttc_bom, Ittc_bomService>
    {
    private readonly Ittc_bomService _ttc_bomService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public ttc_bomController(Ittc_bomService ttc_bomService, IWebHostEnvironment WebHostEnvironment) : base(ttc_bomService, WebHostEnvironment)
    {
    _ttc_bomService = ttc_bomService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

