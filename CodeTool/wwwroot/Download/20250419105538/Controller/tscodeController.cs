﻿namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class tscodeController : BaseController<tscode, ItscodeService>
    {
    private readonly ItscodeService _tscodeService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tscodeController(ItscodeService tscodeService, IWebHostEnvironment WebHostEnvironment) : base(tscodeService, WebHostEnvironment)
    {
    _tscodeService = tscodeService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

