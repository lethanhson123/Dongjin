namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class tdd_poplanController : BaseController<tdd_poplan, Itdd_poplanService>
    {
    private readonly Itdd_poplanService _tdd_poplanService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tdd_poplanController(Itdd_poplanService tdd_poplanService, IWebHostEnvironment WebHostEnvironment) : base(tdd_poplanService, WebHostEnvironment)
    {
    _tdd_poplanService = tdd_poplanService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

