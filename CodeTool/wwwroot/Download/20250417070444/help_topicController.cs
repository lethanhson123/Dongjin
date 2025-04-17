namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class help_topicController : BaseController<help_topic, Ihelp_topicService>
    {
    private readonly Ihelp_topicService _help_topicService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public help_topicController(Ihelp_topicService help_topicService, IWebHostEnvironment WebHostEnvironment) : base(help_topicService, WebHostEnvironment)
    {
    _help_topicService = help_topicService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

