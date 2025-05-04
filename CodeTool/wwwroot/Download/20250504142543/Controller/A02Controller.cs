namespace MES.Controllers
{
    public class A02Controller : Controller
    {
        private readonly IA02Service _A02Service;
        public A02Controller(IA02Service A02Service)
        {
            _A02Service = A02Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

