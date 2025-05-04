namespace MES.Controllers
{
    public class D06Controller : Controller
    {
        private readonly ID06Service _D06Service;
        public D06Controller(ID06Service D06Service)
        {
            _D06Service = D06Service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

