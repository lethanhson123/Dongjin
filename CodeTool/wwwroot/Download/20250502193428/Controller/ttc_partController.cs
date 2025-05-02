namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class ttc_partController : BaseController<ttc_part, Ittc_partService>
    {
    private readonly Ittc_partService _ttc_partService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public ttc_partController(Ittc_partService ttc_partService, IWebHostEnvironment WebHostEnvironment) : base(ttc_partService, WebHostEnvironment)
    {
    _ttc_partService = ttc_partService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

