namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tsyear_group_inv_histController : BaseController<tsyear_group_inv_hist, Itsyear_group_inv_histService>
    {
    private readonly Itsyear_group_inv_histService _tsyear_group_inv_histService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tsyear_group_inv_histController(Itsyear_group_inv_histService tsyear_group_inv_histService, IWebHostEnvironment WebHostEnvironment) : base(tsyear_group_inv_histService, WebHostEnvironment)
    {
    _tsyear_group_inv_histService = tsyear_group_inv_histService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

