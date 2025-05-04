namespace MES.Controllers
{
    public class A05Controller : Controller
    {
        private readonly IA05Service _A05Service;
        public A05Controller(IA05Service A05Service)
        {
            _A05Service = A05Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

