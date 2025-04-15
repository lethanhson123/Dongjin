namespace API_MES.Controllers.v1
{
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class BaseController<T, TBaseService> : Controller
        where T : BaseModel
        where TBaseService : IBaseService<T>
    {
        private readonly TBaseService _BaseService;
        private readonly IWebHostEnvironment _WebHostEnvironment;
        public BaseController(TBaseService baseService
            , IWebHostEnvironment WebHostEnvironment)
        {
            _BaseService = baseService;
            _WebHostEnvironment = WebHostEnvironment;
        }

        [HttpPost]
        [Route("Save")]
        public virtual T Save()
        {
            T result = (T)Activator.CreateInstance(typeof(T));
            try
            {
                result = JsonConvert.DeserializeObject<T>(Request.Form["data"]);
                _BaseService.Save(result);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("SaveAsync")]
        public virtual async Task<T> SaveAsync()
        {
            T result = (T)Activator.CreateInstance(typeof(T));
            try
            {
                result = JsonConvert.DeserializeObject<T>(Request.Form["data"]);
                result = await _BaseService.SaveAsync(result);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("Remove")]
        public virtual string Remove()
        {
            string result = GlobalHelper.InitializationString;
            try
            {
                T model = JsonConvert.DeserializeObject<T>(Request.Form["data"]);
                result = _BaseService.Remove(model).ToString();
            }
            catch (Exception ex)
            {
                string message = ex.Message;
                result = message;
            }
            return result;
        }
        [HttpPost]
        [Route("RemoveAsync")]
        public virtual async Task<string> RemoveAsync()
        {
            string result = GlobalHelper.InitializationString;
            try
            {
                T model = JsonConvert.DeserializeObject<T>(Request.Form["data"]);
                await _BaseService.RemoveAsync(model);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
                result = message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByID")]
        public virtual T GetByID()
        {
            T result = (T)Activator.CreateInstance(typeof(T));
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = _BaseService.GetByID(baseParameter.ID.Value);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByIDAsync")]
        public virtual async Task<T> GetByIDAsync()
        {
            T result = (T)Activator.CreateInstance(typeof(T));
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _BaseService.GetByIDAsync(baseParameter.ID.Value);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByCode")]
        public virtual T GetByCode()
        {
            T result = (T)Activator.CreateInstance(typeof(T));
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = _BaseService.GetByCode(baseParameter.Code);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByCodeAsync")]
        public virtual async Task<T> GetByCodeAsync()
        {
            T result = (T)Activator.CreateInstance(typeof(T));
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _BaseService.GetByCodeAsync(baseParameter.Code);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetAllToList")]
        public virtual List<T> GetAllToList()
        {
            List<T> result = new List<T>();
            try
            {
                result = _BaseService.GetAllToList();
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetAllToListAsync")]
        public virtual async Task<List<T>> GetAllToListAsync()
        {
            List<T> result = new List<T>();
            try
            {
                result = await _BaseService.GetAllToListAsync();
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }

        [HttpPost]
        [Route("GetBySearchStringToListAsync")]
        public virtual async Task<List<T>> GetBySearchStringToListAsync()
        {
            List<T> result = new List<T>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _BaseService.GetBySearchStringToListAsync(baseParameter.SearchString);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByPageAndPageSizeToList")]
        public virtual List<T> GetByPageAndPageSizeToList()
        {
            List<T> result = new List<T>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = _BaseService.GetByPageAndPageSizeToList(baseParameter.Page.Value, baseParameter.PageSize.Value);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByPageAndPageSizeToListAsync")]
        public virtual async Task<List<T>> GetByPageAndPageSizeToListAsync()
        {
            List<T> result = new List<T>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _BaseService.GetByPageAndPageSizeToListAsync(baseParameter.Page.Value, baseParameter.PageSize.Value);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetAllAndEmptyToList")]
        public virtual List<T> GetAllAndEmptyToList()
        {
            List<T> result = new List<T>();
            try
            {
                result = _BaseService.GetAllAndEmptyToList();
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetAllAndEmptyToListAsync")]
        public virtual async Task<List<T>> GetAllAndEmptyToListAsync()
        {
            List<T> result = new List<T>();
            try
            {
                result = await _BaseService.GetAllAndEmptyToListAsync();
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetBySearchStringAndEmptyToList")]
        public virtual List<T> GetBySearchStringAndEmptyToList()
        {
            List<T> result = new List<T>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = _BaseService.GetBySearchStringAndEmptyToList(baseParameter.SearchString);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetBySearchStringAndEmptyToListAsync")]
        public virtual async Task<List<T>> GetBySearchStringAndEmptyToListAsync()
        {
            List<T> result = new List<T>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _BaseService.GetBySearchStringAndEmptyToListAsync(baseParameter.SearchString);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
    }
}
