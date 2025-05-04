namespace MES.Controllers
{
    public class C11Controller : Controller
    {
        private readonly IC11Service _C11Service;
        public C11Controller(IC11Service C11Service)
        {
            _C11Service = C11Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

