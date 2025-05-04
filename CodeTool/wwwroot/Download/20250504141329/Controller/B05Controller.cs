namespace MES.Controllers
{
    public class B05Controller : Controller
    {
        private readonly IB05Service _B05Service;
        public B05Controller(IB05Service B05Service)
        {
            _B05Service = B05Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

