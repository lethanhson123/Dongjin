namespace MES.Controllers
{
    public class C14Controller : Controller
    {
        private readonly IC14Service _C14Service;
        public C14Controller(IC14Service C14Service)
        {
            _C14Service = C14Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

