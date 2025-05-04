namespace MES.Controllers
{
    public class B12Controller : Controller
    {
        private readonly IB12Service _B12Service;
        public B12Controller(IB12Service B12Service)
        {
            _B12Service = B12Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

