namespace MES.Controllers
{
    public class C13Controller : Controller
    {
        private readonly IC13Service _C13Service;
        public C13Controller(IC13Service C13Service)
        {
            _C13Service = C13Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

