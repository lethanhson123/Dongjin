namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class tsbom_ver02_tmp1Controller : BaseController<tsbom_ver02_tmp1, Itsbom_ver02_tmp1Service>
    {
    private readonly Itsbom_ver02_tmp1Service _tsbom_ver02_tmp1Service;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tsbom_ver02_tmp1Controller(Itsbom_ver02_tmp1Service tsbom_ver02_tmp1Service, IWebHostEnvironment WebHostEnvironment) : base(tsbom_ver02_tmp1Service, WebHostEnvironment)
    {
    _tsbom_ver02_tmp1Service = tsbom_ver02_tmp1Service;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

