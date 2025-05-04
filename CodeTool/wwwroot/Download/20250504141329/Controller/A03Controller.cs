namespace MES.Controllers
{
    public class A03Controller : Controller
    {
        private readonly IA03Service _A03Service;
        public A03Controller(IA03Service A03Service)
        {
            _A03Service = A03Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

