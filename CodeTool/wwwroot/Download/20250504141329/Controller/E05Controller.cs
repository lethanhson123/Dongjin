namespace MES.Controllers
{
    public class E05Controller : Controller
    {
        private readonly IE05Service _E05Service;
        public E05Controller(IE05Service E05Service)
        {
            _E05Service = E05Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

