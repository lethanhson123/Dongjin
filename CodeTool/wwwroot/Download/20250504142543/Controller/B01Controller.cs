namespace MES.Controllers
{
    public class B01Controller : Controller
    {
        private readonly IB01Service _B01Service;
        public B01Controller(IB01Service B01Service)
        {
            _B01Service = B01Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

