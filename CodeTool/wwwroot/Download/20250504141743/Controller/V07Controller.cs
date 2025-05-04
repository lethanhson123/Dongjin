namespace MES.Controllers
{
    public class V07Controller : Controller
    {
        private readonly IV07Service _V07Service;
        public V07Controller(IV07Service V07Service)
        {
            _V07Service = V07Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

