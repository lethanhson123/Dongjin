namespace MES.Controllers
{
    public class C12Controller : Controller
    {
        private readonly IC12Service _C12Service;
        public C12Controller(IC12Service C12Service)
        {
            _C12Service = C12Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

