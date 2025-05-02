namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tsyear_inventory_histController : BaseController<tsyear_inventory_hist, Itsyear_inventory_histService>
    {
    private readonly Itsyear_inventory_histService _tsyear_inventory_histService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tsyear_inventory_histController(Itsyear_inventory_histService tsyear_inventory_histService, IWebHostEnvironment WebHostEnvironment) : base(tsyear_inventory_histService, WebHostEnvironment)
    {
    _tsyear_inventory_histService = tsyear_inventory_histService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

