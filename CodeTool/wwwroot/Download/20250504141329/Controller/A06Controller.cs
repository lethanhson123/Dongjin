namespace MES.Controllers
{
    public class A06Controller : Controller
    {
        private readonly IA06Service _A06Service;
        public A06Controller(IA06Service A06Service)
        {
            _A06Service = A06Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

