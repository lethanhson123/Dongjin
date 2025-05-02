namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class pd_inout_partController : BaseController<pd_inout_part, Ipd_inout_partService>
    {
    private readonly Ipd_inout_partService _pd_inout_partService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public pd_inout_partController(Ipd_inout_partService pd_inout_partService, IWebHostEnvironment WebHostEnvironment) : base(pd_inout_partService, WebHostEnvironment)
    {
    _pd_inout_partService = pd_inout_partService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

