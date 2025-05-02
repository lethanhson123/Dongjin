namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class pd_cmpny_costfileController : BaseController<pd_cmpny_costfile, Ipd_cmpny_costfileService>
    {
    private readonly Ipd_cmpny_costfileService _pd_cmpny_costfileService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public pd_cmpny_costfileController(Ipd_cmpny_costfileService pd_cmpny_costfileService, IWebHostEnvironment WebHostEnvironment) : base(pd_cmpny_costfileService, WebHostEnvironment)
    {
    _pd_cmpny_costfileService = pd_cmpny_costfileService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

