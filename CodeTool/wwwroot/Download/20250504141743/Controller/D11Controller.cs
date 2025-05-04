namespace MES.Controllers
{
    public class D11Controller : Controller
    {
        private readonly ID11Service _D11Service;
        public D11Controller(ID11Service D11Service)
        {
            _D11Service = D11Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

