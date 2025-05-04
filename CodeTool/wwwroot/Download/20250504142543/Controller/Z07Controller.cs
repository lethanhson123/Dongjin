namespace MES.Controllers
{
    public class Z07Controller : Controller
    {
        private readonly IZ07Service _Z07Service;
        public Z07Controller(IZ07Service Z07Service)
        {
            _Z07Service = Z07Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

