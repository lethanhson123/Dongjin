namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class pd_part_costController : BaseController<pd_part_cost, Ipd_part_costService>
    {
    private readonly Ipd_part_costService _pd_part_costService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public pd_part_costController(Ipd_part_costService pd_part_costService, IWebHostEnvironment WebHostEnvironment) : base(pd_part_costService, WebHostEnvironment)
    {
    _pd_part_costService = pd_part_costService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

