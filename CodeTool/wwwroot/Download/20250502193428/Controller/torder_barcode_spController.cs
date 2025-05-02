namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class torder_barcode_spController : BaseController<torder_barcode_sp, Itorder_barcode_spService>
    {
    private readonly Itorder_barcode_spService _torder_barcode_spService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public torder_barcode_spController(Itorder_barcode_spService torder_barcode_spService, IWebHostEnvironment WebHostEnvironment) : base(torder_barcode_spService, WebHostEnvironment)
    {
    _torder_barcode_spService = torder_barcode_spService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

