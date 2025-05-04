namespace MES.Controllers
{
    public class B04Controller : Controller
    {
        private readonly IB04Service _B04Service;
        public B04Controller(IB04Service B04Service)
        {
            _B04Service = B04Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

