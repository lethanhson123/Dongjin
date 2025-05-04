namespace MES.Controllers
{
    public class D16Controller : Controller
    {
        private readonly ID16Service _D16Service;
        public D16Controller(ID16Service D16Service)
        {
            _D16Service = D16Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

