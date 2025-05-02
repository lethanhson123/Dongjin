namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class pd_asset_mmController : BaseController<pd_asset_mm, Ipd_asset_mmService>
    {
    private readonly Ipd_asset_mmService _pd_asset_mmService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public pd_asset_mmController(Ipd_asset_mmService pd_asset_mmService, IWebHostEnvironment WebHostEnvironment) : base(pd_asset_mmService, WebHostEnvironment)
    {
    _pd_asset_mmService = pd_asset_mmService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

