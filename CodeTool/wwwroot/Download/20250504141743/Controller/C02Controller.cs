namespace MES.Controllers
{
    public class C02Controller : Controller
    {
        private readonly IC02Service _C02Service;
        public C02Controller(IC02Service C02Service)
        {
            _C02Service = C02Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

