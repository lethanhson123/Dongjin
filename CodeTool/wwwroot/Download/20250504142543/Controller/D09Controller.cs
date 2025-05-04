namespace MES.Controllers
{
    public class D09Controller : Controller
    {
        private readonly ID09Service _D09Service;
        public D09Controller(ID09Service D09Service)
        {
            _D09Service = D09Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

