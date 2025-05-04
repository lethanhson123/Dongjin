namespace MES.Controllers
{
    public class V05Controller : Controller
    {
        private readonly IV05Service _V05Service;
        public V05Controller(IV05Service V05Service)
        {
            _V05Service = V05Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

