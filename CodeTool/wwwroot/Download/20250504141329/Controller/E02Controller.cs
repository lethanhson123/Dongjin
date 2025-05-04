namespace MES.Controllers
{
    public class E02Controller : Controller
    {
        private readonly IE02Service _E02Service;
        public E02Controller(IE02Service E02Service)
        {
            _E02Service = E02Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

