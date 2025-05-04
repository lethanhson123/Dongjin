namespace MES.Controllers
{
    public class C17Controller : Controller
    {
        private readonly IC17Service _C17Service;
        public C17Controller(IC17Service C17Service)
        {
            _C17Service = C17Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

