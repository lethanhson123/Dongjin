namespace MES.Controllers
{
    public class B03Controller : Controller
    {
        private readonly IB03Service _B03Service;
        public B03Controller(IB03Service B03Service)
        {
            _B03Service = B03Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

