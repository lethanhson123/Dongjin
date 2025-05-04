namespace MES.Controllers
{
    public class D02Controller : Controller
    {
        private readonly ID02Service _D02Service;
        public D02Controller(ID02Service D02Service)
        {
            _D02Service = D02Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

