using MESData.Model;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace MESService.Implement
{
    public class tuser_logService : BaseService<tuser_log, Ituser_logRepository>
    , Ituser_logService
    {
        private readonly Ituser_logRepository _tuser_logRepository;
        public tuser_logService(Ituser_logRepository tuser_logRepository) : base(tuser_logRepository)
        {
            _tuser_logRepository = tuser_logRepository;
        }
        public override void Initialization(tuser_log model)
        {
            BaseInitialization(model);
        }
        public override async Task<tuser_log> SaveAsync(tuser_log model)
        {
            try
            {
                if (model.TUSER_IDX > 0)
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
        public virtual async Task<tuser_log> Sync(tuser_log model)
        {
            return model;
        }
        public virtual async Task<List<tuser_log>> C02TS_USERToListAsync(string SearchString, string Account)
        {
            List<tuser_log> result = new List<tuser_log>();
            try
            {
                string sql = @"SELECT `TUSER_IDX`, `TS_MC_NM`, `TS_DATE`, `TS_TIME_ST`, `TS_TIME_END`, `TS_USER` FROM TUSER_LOG WHERE `TS_MC_NM` = '" + SearchString + @"' AND `TS_TIME_ST` > DATE_FORMAT(IF(DATE_FORMAT(NOW(), '%H%i') > 0550, DATE_FORMAT(DATE_ADD(NOW(), INTERVAL 0 DAY), '%Y-%m-%d'), DATE_FORMAT(DATE_ADD(NOW(), INTERVAL - 1 DAY), '%Y-%m-%d')), '%Y-%m-%d') AND `TS_USER` = '" + Account + "'";
                result = await GetByMySQLToListAsync(GlobalHelper.MariaDBConectionString, sql);
                if (result.Count <= 0)
                {
                    sql = @"INSERT INTO `TUSER_LOG` (`TS_MC_NM`, `TS_DATE`, `TS_TIME_ST`, `TS_TIME_END`, `TS_USER`) VALUES ('" + SearchString + "', DATE_FORMAT(IF(DATE_FORMAT(NOW(), '%H%i') > 0550, DATE_FORMAT(DATE_ADD(NOW(), INTERVAL 0 DAY), '%Y-%m-%d'), DATE_FORMAT(DATE_ADD(NOW(), INTERVAL - 1 DAY), '%Y-%m-%d')), '%Y-%m-%d'), NOW(), CONCAT(DATE_ADD(DATE_FORMAT(IF(DATE_FORMAT(NOW(), '%H%i') > 0550, DATE_FORMAT(DATE_ADD(NOW(), INTERVAL 0 DAY), '%Y-%m-%d'), DATE_FORMAT(DATE_ADD(NOW(), INTERVAL - 1 DAY), '%Y-%m-%d')), '%Y-%m-%d'), INTERVAL + 1 DAY), ' 05:49:59'), '" + Account + "')";
                    string resultSub = await MySQLHelper.ExecuteNonQueryAsync(GlobalHelper.MariaDBConectionString, sql);
                }
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            if (result == null)
            {
                result = new List<tuser_log>();
            }
            return result;
        }
        public virtual async Task<List<tuser_log>> C02TS_USERUSER_TIMEToListAsync(string SearchString)
        {
            List<tuser_log> result = new List<tuser_log>();
            try
            {
                string sql = @"SELECT `TUSER_IDX`, `TS_MC_NM`, `TS_DATE`, MIN(`TS_TIME_ST`) AS `MIN`, MAX(`TS_TIME_END`) AS `MAX` FROM TUSER_LOG WHERE `TS_MC_NM` = '" + SearchString + "' AND `TS_DATE` = DATE_FORMAT(IF(DATE_FORMAT(NOW(), '%H%i') > 0550, DATE_FORMAT(DATE_ADD(NOW(), INTERVAL 0 DAY), '%Y-%m-%d'), DATE_FORMAT(DATE_ADD(NOW(), INTERVAL -1 DAY), '%Y-%m-%d')), '%Y-%m-%d')";
                result = await GetByMySQLToListAsync(GlobalHelper.MariaDBConectionString, sql);               
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            if (result == null)
            {
                result = new List<tuser_log>();
            }
            return result;
        }
    }
}

