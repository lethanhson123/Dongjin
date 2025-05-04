namespace MES.Controllers
{
    public class C15Controller : Controller
    {
        private readonly IC15Service _C15Service;
        public C15Controller(IC15Service C15Service)
        {
            _C15Service = C15Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

