namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class help_relationController : BaseController<help_relation, Ihelp_relationService>
    {
    private readonly Ihelp_relationService _help_relationService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public help_relationController(Ihelp_relationService help_relationService, IWebHostEnvironment WebHostEnvironment) : base(help_relationService, WebHostEnvironment)
    {
    _help_relationService = help_relationService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

