namespace MES.Controllers
{
    public class D05Controller : Controller
    {
        private readonly ID05Service _D05Service;
        public D05Controller(ID05Service D05Service)
        {
            _D05Service = D05Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

