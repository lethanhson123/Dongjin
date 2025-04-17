namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class help_categoryController : BaseController<help_category, Ihelp_categoryService>
    {
    private readonly Ihelp_categoryService _help_categoryService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public help_categoryController(Ihelp_categoryService help_categoryService, IWebHostEnvironment WebHostEnvironment) : base(help_categoryService, WebHostEnvironment)
    {
    _help_categoryService = help_categoryService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

