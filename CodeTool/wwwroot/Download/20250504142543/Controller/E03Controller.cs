namespace MES.Controllers
{
    public class E03Controller : Controller
    {
        private readonly IE03Service _E03Service;
        public E03Controller(IE03Service E03Service)
        {
            _E03Service = E03Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

