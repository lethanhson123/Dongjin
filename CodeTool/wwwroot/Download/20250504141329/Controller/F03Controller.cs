namespace MES.Controllers
{
    public class F03Controller : Controller
    {
        private readonly IF03Service _F03Service;
        public F03Controller(IF03Service F03Service)
        {
            _F03Service = F03Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

