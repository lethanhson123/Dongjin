namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class torder_bom_spst2Controller : BaseController<torder_bom_spst2, Itorder_bom_spst2Service>
    {
    private readonly Itorder_bom_spst2Service _torder_bom_spst2Service;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public torder_bom_spst2Controller(Itorder_bom_spst2Service torder_bom_spst2Service, IWebHostEnvironment WebHostEnvironment) : base(torder_bom_spst2Service, WebHostEnvironment)
    {
    _torder_bom_spst2Service = torder_bom_spst2Service;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

