namespace MES.Controllers
{
    public class V01Controller : Controller
    {
        private readonly IV01Service _V01Service;
        public V01Controller(IV01Service V01Service)
        {
            _V01Service = V01Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

