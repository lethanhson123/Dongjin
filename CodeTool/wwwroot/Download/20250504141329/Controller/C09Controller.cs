namespace MES.Controllers
{
    public class C09Controller : Controller
    {
        private readonly IC09Service _C09Service;
        public C09Controller(IC09Service C09Service)
        {
            _C09Service = C09Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

