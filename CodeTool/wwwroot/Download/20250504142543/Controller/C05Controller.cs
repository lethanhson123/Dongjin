namespace MES.Controllers
{
    public class C05Controller : Controller
    {
        private readonly IC05Service _C05Service;
        public C05Controller(IC05Service C05Service)
        {
            _C05Service = C05Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

