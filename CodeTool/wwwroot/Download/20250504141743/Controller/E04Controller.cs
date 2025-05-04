namespace MES.Controllers
{
    public class E04Controller : Controller
    {
        private readonly IE04Service _E04Service;
        public E04Controller(IE04Service E04Service)
        {
            _E04Service = E04Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

