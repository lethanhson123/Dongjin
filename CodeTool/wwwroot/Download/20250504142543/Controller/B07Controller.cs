namespace MES.Controllers
{
    public class B07Controller : Controller
    {
        private readonly IB07Service _B07Service;
        public B07Controller(IB07Service B07Service)
        {
            _B07Service = B07Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

