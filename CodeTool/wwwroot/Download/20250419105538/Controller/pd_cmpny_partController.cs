namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class pd_cmpny_partController : BaseController<pd_cmpny_part, Ipd_cmpny_partService>
    {
    private readonly Ipd_cmpny_partService _pd_cmpny_partService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public pd_cmpny_partController(Ipd_cmpny_partService pd_cmpny_partService, IWebHostEnvironment WebHostEnvironment) : base(pd_cmpny_partService, WebHostEnvironment)
    {
    _pd_cmpny_partService = pd_cmpny_partService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

