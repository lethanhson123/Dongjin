namespace MES.Controllers
{
    public class B11Controller : Controller
    {
        private readonly IB11Service _B11Service;
        public B11Controller(IB11Service B11Service)
        {
            _B11Service = B11Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

