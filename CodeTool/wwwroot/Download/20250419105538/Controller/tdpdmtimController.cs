﻿namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class tdpdmtimController : BaseController<tdpdmtim, ItdpdmtimService>
    {
    private readonly ItdpdmtimService _tdpdmtimService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tdpdmtimController(ItdpdmtimService tdpdmtimService, IWebHostEnvironment WebHostEnvironment) : base(tdpdmtimService, WebHostEnvironment)
    {
    _tdpdmtimService = tdpdmtimService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

