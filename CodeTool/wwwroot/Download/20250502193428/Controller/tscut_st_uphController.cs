namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tscut_st_uphController : BaseController<tscut_st_uph, Itscut_st_uphService>
    {
    private readonly Itscut_st_uphService _tscut_st_uphService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tscut_st_uphController(Itscut_st_uphService tscut_st_uphService, IWebHostEnvironment WebHostEnvironment) : base(tscut_st_uphService, WebHostEnvironment)
    {
    _tscut_st_uphService = tscut_st_uphService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

