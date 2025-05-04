namespace MES.Controllers
{
    public class D01Controller : Controller
    {
        private readonly ID01Service _D01Service;
        public D01Controller(ID01Service D01Service)
        {
            _D01Service = D01Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

