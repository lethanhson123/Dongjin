namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tsyear_inventoryController : BaseController<tsyear_inventory, Itsyear_inventoryService>
    {
    private readonly Itsyear_inventoryService _tsyear_inventoryService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tsyear_inventoryController(Itsyear_inventoryService tsyear_inventoryService, IWebHostEnvironment WebHostEnvironment) : base(tsyear_inventoryService, WebHostEnvironment)
    {
    _tsyear_inventoryService = tsyear_inventoryService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

