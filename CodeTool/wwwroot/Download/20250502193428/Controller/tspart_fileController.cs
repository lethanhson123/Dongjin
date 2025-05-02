namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tspart_fileController : BaseController<tspart_file, Itspart_fileService>
    {
    private readonly Itspart_fileService _tspart_fileService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tspart_fileController(Itspart_fileService tspart_fileService, IWebHostEnvironment WebHostEnvironment) : base(tspart_fileService, WebHostEnvironment)
    {
    _tspart_fileService = tspart_fileService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

