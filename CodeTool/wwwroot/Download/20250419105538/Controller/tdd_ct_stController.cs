namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class tdd_ct_stController : BaseController<tdd_ct_st, Itdd_ct_stService>
    {
    private readonly Itdd_ct_stService _tdd_ct_stService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tdd_ct_stController(Itdd_ct_stService tdd_ct_stService, IWebHostEnvironment WebHostEnvironment) : base(tdd_ct_stService, WebHostEnvironment)
    {
    _tdd_ct_stService = tdd_ct_stService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

