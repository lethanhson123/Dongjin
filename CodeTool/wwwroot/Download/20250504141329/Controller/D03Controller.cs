namespace MES.Controllers
{
    public class D03Controller : Controller
    {
        private readonly ID03Service _D03Service;
        public D03Controller(ID03Service D03Service)
        {
            _D03Service = D03Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

