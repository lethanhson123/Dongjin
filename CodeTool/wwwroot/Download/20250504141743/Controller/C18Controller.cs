namespace MES.Controllers
{
    public class C18Controller : Controller
    {
        private readonly IC18Service _C18Service;
        public C18Controller(IC18Service C18Service)
        {
            _C18Service = C18Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

