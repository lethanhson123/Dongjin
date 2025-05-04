namespace MES.Controllers
{
    public class D99Controller : Controller
    {
        private readonly ID99Service _D99Service;
        public D99Controller(ID99Service D99Service)
        {
            _D99Service = D99Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

