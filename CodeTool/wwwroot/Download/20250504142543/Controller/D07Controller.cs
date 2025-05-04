namespace MES.Controllers
{
    public class D07Controller : Controller
    {
        private readonly ID07Service _D07Service;
        public D07Controller(ID07Service D07Service)
        {
            _D07Service = D07Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

