namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tiivtr_excelController : BaseController<tiivtr_excel, Itiivtr_excelService>
    {
    private readonly Itiivtr_excelService _tiivtr_excelService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tiivtr_excelController(Itiivtr_excelService tiivtr_excelService, IWebHostEnvironment WebHostEnvironment) : base(tiivtr_excelService, WebHostEnvironment)
    {
    _tiivtr_excelService = tiivtr_excelService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

