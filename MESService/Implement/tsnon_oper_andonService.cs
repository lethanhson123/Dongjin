using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace MESService.Implement
{
    public class tsnon_oper_andonService : BaseService<tsnon_oper_andon, Itsnon_oper_andonRepository>
    , Itsnon_oper_andonService
    {
        private readonly Itsnon_oper_andonRepository _tsnon_oper_andonRepository;
        public tsnon_oper_andonService(Itsnon_oper_andonRepository tsnon_oper_andonRepository) : base(tsnon_oper_andonRepository)
        {
            _tsnon_oper_andonRepository = tsnon_oper_andonRepository;
        }
        public override void Initialization(tsnon_oper_andon model)
        {
            BaseInitialization(model);
        }
        public override async Task<tsnon_oper_andon> SaveAsync(tsnon_oper_andon model)
        {
            try
            {
                if (model.TSNON_OPER_MITOR_IDX > 0)
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
        public virtual async Task<tsnon_oper_andon> Sync(tsnon_oper_andon model)
        {
            return model;
        }
        public virtual async Task<string> C02_STOP_LoadAsync(string Account, string SearchString)
        {
            string result = GlobalHelper.InitializationString;
            try
            {
                
                string sql = @"INSERT INTO  `tsnon_oper_andon` (`tsnon_oper_mitor_MCNM`, `tsnon_oper_mitor_NOIC`, `tsnon_oper_mitor_RUNYN`, `CREATE_DTM`, `CREATE_USER`) VALUES ('" + SearchString + "', 'MC STOP', 'Y', NOW(), '" + Account + "') ON DUPLICATE KEY UPDATE `tsnon_oper_mitor_NOIC` = VALUES(`tsnon_oper_mitor_NOIC`), `tsnon_oper_mitor_RUNYN` = VALUES(`tsnon_oper_mitor_RUNYN`), `UPDATE_DTM` = VALUES(`CREATE_DTM`),  `UPDATE_USER` = VALUES(`CREATE_USER`)     ";
                result = await MySQLHelper.ExecuteNonQueryAsync(GlobalHelper.MariaDBConectionString, sql);

                sql = @"ALTER TABLE     `tsnon_oper_andon`     AUTO_INCREMENT= 1";
                result = await MySQLHelper.ExecuteNonQueryAsync(GlobalHelper.MariaDBConectionString, sql);
            }
            catch (Exception ex)
            {
                result = ex.Message;
            }

            return result;
        }
        public virtual async Task<string> C02_STOP_Button2_ClickAsync(string Account, string SearchString)
        {
            string result = GlobalHelper.InitializationString;
            try
            {

                string sql = @"INSERT INTO  `tsnon_oper_andon` (`tsnon_oper_mitor_MCNM`, `tsnon_oper_mitor_NOIC`, `tsnon_oper_mitor_RUNYN`, `CREATE_DTM`, `CREATE_USER`) VALUES ('" + SearchString + "', 'MC STOP', 'I', NOW(), '" + Account + "') ON DUPLICATE KEY UPDATE `tsnon_oper_mitor_NOIC` = VALUES(`tsnon_oper_mitor_NOIC`), `tsnon_oper_mitor_RUNYN` = VALUES(`tsnon_oper_mitor_RUNYN`), `UPDATE_DTM` = VALUES(`CREATE_DTM`),  `UPDATE_USER` = VALUES(`CREATE_USER`)";
                result = await MySQLHelper.ExecuteNonQueryAsync(GlobalHelper.MariaDBConectionString, sql);

            }
            catch (Exception ex)
            {
                result = ex.Message;
            }

            return result;
        }
        public virtual async Task<string> C02_STOP_Button1_ClickAsync(string Account, string SearchString)
        {
            string result = GlobalHelper.InitializationString;
            try
            {

                string sql = @"INSERT INTO  `tsnon_oper_andon` (`tsnon_oper_mitor_MCNM`, `tsnon_oper_mitor_NOIC`, `tsnon_oper_mitor_RUNYN`, `CREATE_DTM`, `CREATE_USER`) VALUES ('" + SearchString + "', 'MC STOP', 'N', NOW(), '" + Account + "') ON DUPLICATE KEY UPDATE `tsnon_oper_mitor_NOIC` = VALUES(`tsnon_oper_mitor_NOIC`), `tsnon_oper_mitor_RUNYN` = VALUES(`tsnon_oper_mitor_RUNYN`), `UPDATE_DTM` = VALUES(`CREATE_DTM`), `UPDATE_USER` = VALUES(`CREATE_USER`)";
                result = await MySQLHelper.ExecuteNonQueryAsync(GlobalHelper.MariaDBConectionString, sql);

                sql = @"ALTER TABLE     `tsnon_oper_andon`     AUTO_INCREMENT= 1";
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

