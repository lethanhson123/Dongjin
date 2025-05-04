namespace MES.Controllers
{
    public class E20Controller : Controller
    {
        private readonly IE20Service _E20Service;
        public E20Controller(IE20Service E20Service)
        {
            _E20Service = E20Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

