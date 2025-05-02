namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class ttoolmaster2Controller : BaseController<ttoolmaster2, Ittoolmaster2Service>
    {
    private readonly Ittoolmaster2Service _ttoolmaster2Service;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public ttoolmaster2Controller(Ittoolmaster2Service ttoolmaster2Service, IWebHostEnvironment WebHostEnvironment) : base(ttoolmaster2Service, WebHostEnvironment)
    {
    _ttoolmaster2Service = ttoolmaster2Service;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

