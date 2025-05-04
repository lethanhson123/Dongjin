namespace MES.Controllers
{
    public class Z02Controller : Controller
    {
        private readonly IZ02Service _Z02Service;
        public Z02Controller(IZ02Service Z02Service)
        {
            _Z02Service = Z02Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

