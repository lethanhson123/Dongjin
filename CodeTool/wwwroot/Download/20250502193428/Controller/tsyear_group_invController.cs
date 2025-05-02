namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tsyear_group_invController : BaseController<tsyear_group_inv, Itsyear_group_invService>
    {
    private readonly Itsyear_group_invService _tsyear_group_invService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tsyear_group_invController(Itsyear_group_invService tsyear_group_invService, IWebHostEnvironment WebHostEnvironment) : base(tsyear_group_invService, WebHostEnvironment)
    {
    _tsyear_group_invService = tsyear_group_invService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

