namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class track_bc_tmpController : BaseController<track_bc_tmp, Itrack_bc_tmpService>
    {
    private readonly Itrack_bc_tmpService _track_bc_tmpService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public track_bc_tmpController(Itrack_bc_tmpService track_bc_tmpService, IWebHostEnvironment WebHostEnvironment) : base(track_bc_tmpService, WebHostEnvironment)
    {
    _track_bc_tmpService = track_bc_tmpService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

