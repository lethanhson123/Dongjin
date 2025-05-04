namespace MES.Controllers
{
    public class V04Controller : Controller
    {
        private readonly IV04Service _V04Service;
        public V04Controller(IV04Service V04Service)
        {
            _V04Service = V04Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

