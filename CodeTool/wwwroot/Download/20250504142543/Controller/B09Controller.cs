namespace MES.Controllers
{
    public class B09Controller : Controller
    {
        private readonly IB09Service _B09Service;
        public B09Controller(IB09Service B09Service)
        {
            _B09Service = B09Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

