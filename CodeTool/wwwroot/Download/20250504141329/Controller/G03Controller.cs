namespace MES.Controllers
{
    public class G03Controller : Controller
    {
        private readonly IG03Service _G03Service;
        public G03Controller(IG03Service G03Service)
        {
            _G03Service = G03Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

