namespace MES.Controllers
{
    public class Z06Controller : Controller
    {
        private readonly IZ06Service _Z06Service;
        public Z06Controller(IZ06Service Z06Service)
        {
            _Z06Service = Z06Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

