namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class pd_mc_orderlistController : BaseController<pd_mc_orderlist, Ipd_mc_orderlistService>
    {
    private readonly Ipd_mc_orderlistService _pd_mc_orderlistService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public pd_mc_orderlistController(Ipd_mc_orderlistService pd_mc_orderlistService, IWebHostEnvironment WebHostEnvironment) : base(pd_mc_orderlistService, WebHostEnvironment)
    {
    _pd_mc_orderlistService = pd_mc_orderlistService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

