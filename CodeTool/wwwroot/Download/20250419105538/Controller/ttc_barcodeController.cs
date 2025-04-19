namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class ttc_barcodeController : BaseController<ttc_barcode, Ittc_barcodeService>
    {
    private readonly Ittc_barcodeService _ttc_barcodeService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public ttc_barcodeController(Ittc_barcodeService ttc_barcodeService, IWebHostEnvironment WebHostEnvironment) : base(ttc_barcodeService, WebHostEnvironment)
    {
    _ttc_barcodeService = ttc_barcodeService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

