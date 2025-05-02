namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class pdpart_addlistController : BaseController<pdpart_addlist, Ipdpart_addlistService>
    {
    private readonly Ipdpart_addlistService _pdpart_addlistService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public pdpart_addlistController(Ipdpart_addlistService pdpart_addlistService, IWebHostEnvironment WebHostEnvironment) : base(pdpart_addlistService, WebHostEnvironment)
    {
    _pdpart_addlistService = pdpart_addlistService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

