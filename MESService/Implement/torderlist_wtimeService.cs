namespace MESService.Implement
{
    public class torderlist_wtimeService : BaseService<torderlist_wtime, Itorderlist_wtimeRepository>
    , Itorderlist_wtimeService
    {
        private readonly Itorderlist_wtimeRepository _torderlist_wtimeRepository;
        public torderlist_wtimeService(Itorderlist_wtimeRepository torderlist_wtimeRepository) : base(torderlist_wtimeRepository)
        {
            _torderlist_wtimeRepository = torderlist_wtimeRepository;
        }
        public override void Initialization(torderlist_wtime model)
        {
            BaseInitialization(model);
        }
        public override async Task<torderlist_wtime> SaveAsync(torderlist_wtime model)
        {
            try
            {
                if (model.TOWT_INDX > 0)
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
        public virtual async Task<torderlist_wtime> Sync(torderlist_wtime model)
        {
            return model;
        }
        public virtual async Task<string> C02_STOP_SW_TIMEAsync(string Account, string SearchString, string SearchString001, string SearchString002, DateTime Begin)
        {
            string result = GlobalHelper.InitializationString;
            try
            {
                string BeginString = Begin.ToString("yyyy-MM-dd HH:mm:ss");
                string sql = "INSERT INTO  `TORDERLIST_WTIME`  (`USER_ID`, `USER_MC`, `ORDER_IDX`, `S_TIME`, `CREATE_DTM`, `CREATE_USER`, `MENU_TEXT`) VALUES ('" + Account + "', '" + SearchString + "', '" + SearchString002 + "', NOW(), '" + BeginString + "', '" + Account + "', '" + SearchString001 + "')";
                result = await MySQLHelper.ExecuteNonQueryAsync(GlobalHelper.MariaDBConectionString, sql);
            }
            catch (Exception ex)
            {
                result = ex.Message;
            }

            return result;
        }
        public virtual async Task<List<torderlist_wtime>> C02_STOP_SW_TIMEToListAsync(DateTime Begin)
        {
            List<torderlist_wtime> result = new List<torderlist_wtime>();
            try
            {
                string BeginString = Begin.ToString("yyyy-MM-dd HH:mm:ss");
                string sql = "SELECT  TORDERLIST_WTIME.TOWT_INDX    FROM   TORDERLIST_WTIME  WHERE TORDERLIST_WTIME.CREATE_DTM ='" + BeginString + "'";
                result = await GetByMySQLToListAsync(GlobalHelper.MariaDBConectionString, sql);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            if (result == null)
            {
                result = new List<torderlist_wtime>();
            }
            return result;
        }
        public virtual async Task<string> C02_STOP_EW_TIMEAsync(string SearchString)
        {
            string result = GlobalHelper.InitializationString;
            try
            {                
                string sql = "UPDATE  `TORDERLIST_WTIME`   SET `E_TIME`= NOW()    WHERE  `TOWT_INDX` = '" + SearchString + "'";
                result = await MySQLHelper.ExecuteNonQueryAsync(GlobalHelper.MariaDBConectionString, sql);
            }
            catch (Exception ex)
            {
                result = ex.Message;
            }

            return result;
        }
    }
}

