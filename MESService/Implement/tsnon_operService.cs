namespace MESService.Implement
{
    public class tsnon_operService : BaseService<tsnon_oper, Itsnon_operRepository>
    , Itsnon_operService
    {
        private readonly Itsnon_operRepository _tsnon_operRepository;
        public tsnon_operService(Itsnon_operRepository tsnon_operRepository) : base(tsnon_operRepository)
        {
            _tsnon_operRepository = tsnon_operRepository;
        }
        public override void Initialization(tsnon_oper model)
        {
            BaseInitialization(model);
        }
        public override async Task<tsnon_oper> SaveAsync(tsnon_oper model)
        {
            try
            {
                if (model.TSNON_OPER_IDX > 0)
                {
                    await UpdateAsync(model);
                }
                else
                {
                    await AddAsync(model);
                }
                await Sync(model);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return model;
        }
        public virtual async Task<tsnon_oper> Sync(tsnon_oper model)
        {
            return model;
        }
        public virtual async Task<string> C02_STOP_LoadAsync(string Account, string SearchString, string SearchString001, DateTime Begin)
        {
            string result = GlobalHelper.InitializationString;
            try
            {
                string BeginString = Begin.ToString("yyyy-MM-dd HH:mm:ss");
                string sql = "INSERT INTO `TSNON_OPER` (`TSNON_OPER_MCNM`, `TSNON_OPER_USERNM`, `TSNON_OPER_DATE`, `TSNON_OPER_STIME`, `CREATE_DTM`, `CREATE_USER`, `TSNON_OPER_CODE`) VALUES ('" + SearchString + "', '" + Account + "', DATE_FORMAT(NOW(), '%Y-%m-%d'), NOW(), '" + BeginString + "', '" + Account + "', '" + SearchString001 + "')";
                result = await MySQLHelper.ExecuteNonQueryAsync(GlobalHelper.MariaDBConectionString, sql);
            }
            catch (Exception ex)
            {
                result = ex.Message;
            }

            return result;
        }
        public virtual async Task<List<tsnon_oper>> C02_STOP_LoadToListAsync(DateTime Begin)
        {
            List<tsnon_oper> result = new List<tsnon_oper>();
            try
            {                
                string BeginString = Begin.ToString("yyyy-MM-dd HH:mm:ss");
                string sql = "SELECT  TSNON_OPER.TSNON_OPER_IDX FROM TSNON_OPER  WHERE TSNON_OPER.CREATE_DTM ='" + BeginString + "'";
                result = await GetByMySQLToListAsync(GlobalHelper.MariaDBConectionString, sql);
            }
            catch (Exception ex)
            {
                string Message = ex.Message;
            }
            if (result == null)
            {
                result = new List<tsnon_oper>();
            }
            return result;
        }
    }
}

