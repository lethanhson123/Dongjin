﻿namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class pdcdgrController : BaseController<pdcdgr, IpdcdgrService>
    {
    private readonly IpdcdgrService _pdcdgrService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public pdcdgrController(IpdcdgrService pdcdgrService, IWebHostEnvironment WebHostEnvironment) : base(pdcdgrService, WebHostEnvironment)
    {
    _pdcdgrService = pdcdgrService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

