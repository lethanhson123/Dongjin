namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class torder_barcode_lpController : BaseController<torder_barcode_lp, Itorder_barcode_lpService>
    {
    private readonly Itorder_barcode_lpService _torder_barcode_lpService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public torder_barcode_lpController(Itorder_barcode_lpService torder_barcode_lpService, IWebHostEnvironment WebHostEnvironment) : base(torder_barcode_lpService, WebHostEnvironment)
    {
    _torder_barcode_lpService = torder_barcode_lpService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

