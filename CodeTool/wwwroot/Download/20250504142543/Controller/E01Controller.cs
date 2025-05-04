namespace MES.Controllers
{
    public class E01Controller : Controller
    {
        private readonly IE01Service _E01Service;
        public E01Controller(IE01Service E01Service)
        {
            _E01Service = E01Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

