namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class torder_bom_spst1Controller : BaseController<torder_bom_spst1, Itorder_bom_spst1Service>
    {
    private readonly Itorder_bom_spst1Service _torder_bom_spst1Service;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public torder_bom_spst1Controller(Itorder_bom_spst1Service torder_bom_spst1Service, IWebHostEnvironment WebHostEnvironment) : base(torder_bom_spst1Service, WebHostEnvironment)
    {
    _torder_bom_spst1Service = torder_bom_spst1Service;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

