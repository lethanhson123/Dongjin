namespace MES.Controllers
{
    public class B08Controller : Controller
    {
        private readonly IB08Service _B08Service;
        public B08Controller(IB08Service B08Service)
        {
            _B08Service = B08Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

