namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class torder_spcController : BaseController<torder_spc, Itorder_spcService>
    {
    private readonly Itorder_spcService _torder_spcService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public torder_spcController(Itorder_spcService torder_spcService, IWebHostEnvironment WebHostEnvironment) : base(torder_spcService, WebHostEnvironment)
    {
    _torder_spcService = torder_spcService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

