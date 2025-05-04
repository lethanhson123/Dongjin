namespace MES.Controllers
{
    public class C04Controller : Controller
    {
        private readonly IC04Service _C04Service;
        public C04Controller(IC04Service C04Service)
        {
            _C04Service = C04Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

