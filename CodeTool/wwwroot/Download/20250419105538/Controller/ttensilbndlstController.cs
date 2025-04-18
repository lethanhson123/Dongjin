﻿namespace API_MES.Controllers.v2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class ttensilbndlstController : BaseController<ttensilbndlst, IttensilbndlstService>
    {
    private readonly IttensilbndlstService _ttensilbndlstService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public ttensilbndlstController(IttensilbndlstService ttensilbndlstService, IWebHostEnvironment WebHostEnvironment) : base(ttensilbndlstService, WebHostEnvironment)
    {
    _ttensilbndlstService = ttensilbndlstService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

