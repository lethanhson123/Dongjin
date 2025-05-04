namespace MES.Controllers
{
    public class B06Controller : Controller
    {
        private readonly IB06Service _B06Service;
        public B06Controller(IB06Service B06Service)
        {
            _B06Service = B06Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

