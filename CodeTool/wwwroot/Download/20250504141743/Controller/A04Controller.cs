namespace MES.Controllers
{
    public class A04Controller : Controller
    {
        private readonly IA04Service _A04Service;
        public A04Controller(IA04Service A04Service)
        {
            _A04Service = A04Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

