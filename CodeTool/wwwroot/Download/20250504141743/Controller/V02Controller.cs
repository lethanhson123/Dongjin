namespace MES.Controllers
{
    public class V02Controller : Controller
    {
        private readonly IV02Service _V02Service;
        public V02Controller(IV02Service V02Service)
        {
            _V02Service = V02Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

