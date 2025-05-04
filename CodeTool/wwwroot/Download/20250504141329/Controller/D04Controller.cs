namespace MES.Controllers
{
    public class D04Controller : Controller
    {
        private readonly ID04Service _D04Service;
        public D04Controller(ID04Service D04Service)
        {
            _D04Service = D04Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

