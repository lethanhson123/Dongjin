namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class zadmin_functionController : BaseController<zadmin_function, Izadmin_functionService>
    {
    private readonly Izadmin_functionService _zadmin_functionService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public zadmin_functionController(Izadmin_functionService zadmin_functionService, IWebHostEnvironment WebHostEnvironment) : base(zadmin_functionService, WebHostEnvironment)
    {
    _zadmin_functionService = zadmin_functionService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

