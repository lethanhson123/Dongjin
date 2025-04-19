namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class torder_barcodeController : BaseController<torder_barcode, Itorder_barcodeService>
    {
    private readonly Itorder_barcodeService _torder_barcodeService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public torder_barcodeController(Itorder_barcodeService torder_barcodeService, IWebHostEnvironment WebHostEnvironment) : base(torder_barcodeService, WebHostEnvironment)
    {
    _torder_barcodeService = torder_barcodeService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

