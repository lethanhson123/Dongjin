namespace MES.Controllers
{
    public class B10Controller : Controller
    {
        private readonly IB10Service _B10Service;
        public B10Controller(IB10Service B10Service)
        {
            _B10Service = B10Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

