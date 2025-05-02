namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tsnon_oper_andon_listController : BaseController<tsnon_oper_andon_list, Itsnon_oper_andon_listService>
    {
    private readonly Itsnon_oper_andon_listService _tsnon_oper_andon_listService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tsnon_oper_andon_listController(Itsnon_oper_andon_listService tsnon_oper_andon_listService, IWebHostEnvironment WebHostEnvironment) : base(tsnon_oper_andon_listService, WebHostEnvironment)
    {
    _tsnon_oper_andon_listService = tsnon_oper_andon_listService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

