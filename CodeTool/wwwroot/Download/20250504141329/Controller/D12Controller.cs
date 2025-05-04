namespace MES.Controllers
{
    public class D12Controller : Controller
    {
        private readonly ID12Service _D12Service;
        public D12Controller(ID12Service D12Service)
        {
            _D12Service = D12Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

