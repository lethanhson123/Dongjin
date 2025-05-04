namespace MES.Controllers
{
    public class C08Controller : Controller
    {
        private readonly IC08Service _C08Service;
        public C08Controller(IC08Service C08Service)
        {
            _C08Service = C08Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

