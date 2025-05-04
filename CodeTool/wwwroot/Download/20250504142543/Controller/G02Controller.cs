namespace MES.Controllers
{
    public class G02Controller : Controller
    {
        private readonly IG02Service _G02Service;
        public G02Controller(IG02Service G02Service)
        {
            _G02Service = G02Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

