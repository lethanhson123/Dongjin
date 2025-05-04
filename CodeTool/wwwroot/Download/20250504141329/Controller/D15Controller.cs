namespace MES.Controllers
{
    public class D15Controller : Controller
    {
        private readonly ID15Service _D15Service;
        public D15Controller(ID15Service D15Service)
        {
            _D15Service = D15Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

