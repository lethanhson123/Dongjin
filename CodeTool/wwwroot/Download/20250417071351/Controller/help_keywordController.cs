namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class help_keywordController : BaseController<help_keyword, Ihelp_keywordService>
    {
    private readonly Ihelp_keywordService _help_keywordService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public help_keywordController(Ihelp_keywordService help_keywordService, IWebHostEnvironment WebHostEnvironment) : base(help_keywordService, WebHostEnvironment)
    {
    _help_keywordService = help_keywordService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

