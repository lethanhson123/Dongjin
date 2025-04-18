﻿namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class tspartController : BaseController<tspart, ItspartService>
    {
    private readonly ItspartService _tspartService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tspartController(ItspartService tspartService, IWebHostEnvironment WebHostEnvironment) : base(tspartService, WebHostEnvironment)
    {
    _tspartService = tspartService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

