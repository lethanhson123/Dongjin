namespace MES.Controllers
{
    public class Z01Controller : Controller
    {
        private readonly IZ01Service _Z01Service;
        public Z01Controller(IZ01Service Z01Service)
        {
            _Z01Service = Z01Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

