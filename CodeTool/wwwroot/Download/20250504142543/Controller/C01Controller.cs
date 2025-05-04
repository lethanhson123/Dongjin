namespace MES.Controllers
{
    public class C01Controller : Controller
    {
        private readonly IC01Service _C01Service;
        public C01Controller(IC01Service C01Service)
        {
            _C01Service = C01Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

