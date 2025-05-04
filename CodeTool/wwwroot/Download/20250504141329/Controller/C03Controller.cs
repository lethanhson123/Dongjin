namespace MES.Controllers
{
    public class C03Controller : Controller
    {
        private readonly IC03Service _C03Service;
        public C03Controller(IC03Service C03Service)
        {
            _C03Service = C03Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

