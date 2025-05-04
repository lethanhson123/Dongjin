namespace MES.Controllers
{
    public class A07Controller : Controller
    {
        private readonly IA07Service _A07Service;
        public A07Controller(IA07Service A07Service)
        {
            _A07Service = A07Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

