namespace MES.Controllers
{
    public class V06Controller : Controller
    {
        private readonly IV06Service _V06Service;
        public V06Controller(IV06Service V06Service)
        {
            _V06Service = V06Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

