namespace MES.Controllers
{
    public class B02Controller : Controller
    {
        private readonly IB02Service _B02Service;
        public B02Controller(IB02Service B02Service)
        {
            _B02Service = B02Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

