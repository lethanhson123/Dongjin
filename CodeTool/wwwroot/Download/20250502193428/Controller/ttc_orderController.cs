namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class ttc_orderController : BaseController<ttc_order, Ittc_orderService>
    {
    private readonly Ittc_orderService _ttc_orderService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public ttc_orderController(Ittc_orderService ttc_orderService, IWebHostEnvironment WebHostEnvironment) : base(ttc_orderService, WebHostEnvironment)
    {
    _ttc_orderService = ttc_orderService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

