namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class tsbom_part_infController : BaseController<tsbom_part_inf, Itsbom_part_infService>
    {
    private readonly Itsbom_part_infService _tsbom_part_infService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tsbom_part_infController(Itsbom_part_infService tsbom_part_infService, IWebHostEnvironment WebHostEnvironment) : base(tsbom_part_infService, WebHostEnvironment)
    {
    _tsbom_part_infService = tsbom_part_infService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

