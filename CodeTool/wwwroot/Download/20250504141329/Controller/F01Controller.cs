namespace MES.Controllers
{
    public class F01Controller : Controller
    {
        private readonly IF01Service _F01Service;
        public F01Controller(IF01Service F01Service)
        {
            _F01Service = F01Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

