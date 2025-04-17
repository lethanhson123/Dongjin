namespace API_MES.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class help_topicController : BaseController<help_topic, Ihelp_topicService>
    {
        private readonly Ihelp_topicService _help_topicService;
        private readonly IWebHostEnvironment _WebHostEnvironment;
        public help_topicController(Ihelp_topicService help_topicService, IWebHostEnvironment WebHostEnvironment) : base(help_topicService, WebHostEnvironment)
        {
            _help_topicService = help_topicService;
            _WebHostEnvironment = WebHostEnvironment;
        }
        [HttpGet]
        [Route("GetSOHU")]
        public virtual async Task<List<help_topic>> GetSOHU()
        {
            List<help_topic> result = new List<help_topic>();
            try
            {              
                result = await _help_topicService.GetSOHU();
            }
            catch (Exception ex)
            {
                string message = ex.Message;                
            }
            return result;
        }
        [HttpGet]
        [Route("GetSOHU2025")]
        public virtual async Task<List<help_topic>> GetSOHU2025(int RowNumber)
        {
            List<help_topic> result = new List<help_topic>();
            try
            {
                result = await _help_topicService.GetSOHU2025(RowNumber);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
    }
}

