namespace MES.Controllers
{
    public class Z03Controller : Controller
    {
        private readonly IZ03Service _Z03Service;
        public Z03Controller(IZ03Service Z03Service)
        {
            _Z03Service = Z03Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

