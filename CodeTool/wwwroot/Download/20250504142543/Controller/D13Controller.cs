namespace MES.Controllers
{
    public class D13Controller : Controller
    {
        private readonly ID13Service _D13Service;
        public D13Controller(ID13Service D13Service)
        {
            _D13Service = D13Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

