namespace MES.Controllers
{
    public class C06Controller : Controller
    {
        private readonly IC06Service _C06Service;
        public C06Controller(IC06Service C06Service)
        {
            _C06Service = C06Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

