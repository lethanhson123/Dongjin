namespace MES.Controllers
{
    public class D14Controller : Controller
    {
        private readonly ID14Service _D14Service;
        public D14Controller(ID14Service D14Service)
        {
            _D14Service = D14Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

