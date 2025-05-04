namespace MES.Controllers
{
    public class G01Controller : Controller
    {
        private readonly IG01Service _G01Service;
        public G01Controller(IG01Service G01Service)
        {
            _G01Service = G01Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

