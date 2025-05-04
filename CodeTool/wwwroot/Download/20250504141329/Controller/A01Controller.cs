namespace MES.Controllers
{
    public class A01Controller : Controller
    {
        private readonly IA01Service _A01Service;
        public A01Controller(IA01Service A01Service)
        {
            _A01Service = A01Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

