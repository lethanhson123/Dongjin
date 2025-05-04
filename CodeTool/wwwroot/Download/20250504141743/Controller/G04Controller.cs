namespace MES.Controllers
{
    public class G04Controller : Controller
    {
        private readonly IG04Service _G04Service;
        public G04Controller(IG04Service G04Service)
        {
            _G04Service = G04Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

