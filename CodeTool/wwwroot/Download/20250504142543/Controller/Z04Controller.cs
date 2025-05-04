namespace MES.Controllers
{
    public class Z04Controller : Controller
    {
        private readonly IZ04Service _Z04Service;
        public Z04Controller(IZ04Service Z04Service)
        {
            _Z04Service = Z04Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

