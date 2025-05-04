namespace MES.Controllers
{
    public class C19Controller : Controller
    {
        private readonly IC19Service _C19Service;
        public C19Controller(IC19Service C19Service)
        {
            _C19Service = C19Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

