﻿namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class tsmnauController : BaseController<tsmnau, ItsmnauService>
    {
    private readonly ItsmnauService _tsmnauService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tsmnauController(ItsmnauService tsmnauService, IWebHostEnvironment WebHostEnvironment) : base(tsmnauService, WebHostEnvironment)
    {
    _tsmnauService = tsmnauService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

