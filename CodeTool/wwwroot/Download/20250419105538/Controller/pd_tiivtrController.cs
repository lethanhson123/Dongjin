namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class pd_tiivtrController : BaseController<pd_tiivtr, Ipd_tiivtrService>
    {
    private readonly Ipd_tiivtrService _pd_tiivtrService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public pd_tiivtrController(Ipd_tiivtrService pd_tiivtrService, IWebHostEnvironment WebHostEnvironment) : base(pd_tiivtrService, WebHostEnvironment)
    {
    _pd_tiivtrService = pd_tiivtrService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

