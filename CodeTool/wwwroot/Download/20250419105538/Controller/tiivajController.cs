﻿namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class tiivajController : BaseController<tiivaj, ItiivajService>
    {
    private readonly ItiivajService _tiivajService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public tiivajController(ItiivajService tiivajService, IWebHostEnvironment WebHostEnvironment) : base(tiivajService, WebHostEnvironment)
    {
    _tiivajService = tiivajService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

