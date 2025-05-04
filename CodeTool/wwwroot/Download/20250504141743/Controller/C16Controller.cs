namespace MES.Controllers
{
    public class C16Controller : Controller
    {
        private readonly IC16Service _C16Service;
        public C16Controller(IC16Service C16Service)
        {
            _C16Service = C16Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

