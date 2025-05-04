namespace MES.Controllers
{
    public class A09Controller : Controller
    {
        private readonly IA09Service _A09Service;
        public A09Controller(IA09Service A09Service)
        {
            _A09Service = A09Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

