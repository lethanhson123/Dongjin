namespace MES.Controllers
{
    public class Z05Controller : Controller
    {
        private readonly IZ05Service _Z05Service;
        public Z05Controller(IZ05Service Z05Service)
        {
            _Z05Service = Z05Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

