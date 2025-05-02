namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class apqp_codeController : BaseController<apqp_code, Iapqp_codeService>
    {
    private readonly Iapqp_codeService _apqp_codeService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public apqp_codeController(Iapqp_codeService apqp_codeService, IWebHostEnvironment WebHostEnvironment) : base(apqp_codeService, WebHostEnvironment)
    {
    _apqp_codeService = apqp_codeService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

