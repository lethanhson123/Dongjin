namespace MES.Controllers
{
    public class V03Controller : Controller
    {
        private readonly IV03Service _V03Service;
        public V03Controller(IV03Service V03Service)
        {
            _V03Service = V03Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

