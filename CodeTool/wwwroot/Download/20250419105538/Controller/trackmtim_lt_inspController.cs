namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class trackmtim_lt_inspController : BaseController<trackmtim_lt_insp, Itrackmtim_lt_inspService>
    {
    private readonly Itrackmtim_lt_inspService _trackmtim_lt_inspService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public trackmtim_lt_inspController(Itrackmtim_lt_inspService trackmtim_lt_inspService, IWebHostEnvironment WebHostEnvironment) : base(trackmtim_lt_inspService, WebHostEnvironment)
    {
    _trackmtim_lt_inspService = trackmtim_lt_inspService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

