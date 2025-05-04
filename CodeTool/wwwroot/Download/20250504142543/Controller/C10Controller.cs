namespace MES.Controllers
{
    public class C10Controller : Controller
    {
        private readonly IC10Service _C10Service;
        public C10Controller(IC10Service C10Service)
        {
            _C10Service = C10Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

