namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class tsbom_po_listController : BaseController<tsbom_po_list, Itsbom_po_listService>
    {
    private readonly Itsbom_po_listService _tsbom_po_listService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tsbom_po_listController(Itsbom_po_listService tsbom_po_listService, IWebHostEnvironment WebHostEnvironment) : base(tsbom_po_listService, WebHostEnvironment)
    {
    _tsbom_po_listService = tsbom_po_listService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

