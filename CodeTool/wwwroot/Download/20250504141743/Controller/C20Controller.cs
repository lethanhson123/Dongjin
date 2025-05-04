namespace MES.Controllers
{
    public class C20Controller : Controller
    {
        private readonly IC20Service _C20Service;
        public C20Controller(IC20Service C20Service)
        {
            _C20Service = C20Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

