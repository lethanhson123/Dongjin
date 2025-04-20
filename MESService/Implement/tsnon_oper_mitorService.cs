using MESData.Model;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.Collections.Generic;

namespace MESService.Implement
{
    public class tsnon_oper_mitorService : BaseService<tsnon_oper_mitor, Itsnon_oper_mitorRepository>
    , Itsnon_oper_mitorService
    {
        private readonly Itsnon_oper_mitorRepository _tsnon_oper_mitorRepository;
        public tsnon_oper_mitorService(Itsnon_oper_mitorRepository tsnon_oper_mitorRepository) : base(tsnon_oper_mitorRepository)
        {
            _tsnon_oper_mitorRepository = tsnon_oper_mitorRepository;
        }
        public override void Initialization(tsnon_oper_mitor model)
        {
            BaseInitialization(model);
        }
        public override async Task<tsnon_oper_mitor> SaveAsync(tsnon_oper_mitor model)
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
        public virtual async Task<tsnon_oper_mitor> Sync(tsnon_oper_mitor model)
        {
            return model;
        }
        public virtual async Task<string> C02_LoadAsync(string SearchString)
        {
            string result = GlobalHelper.InitializationString;
            try
            {
                string sql = @"INSERT INTO tsnon_oper_mitor (`tsnon_oper_mitor_MCNM`, `tsnon_oper_mitor_NOIC`, `tsnon_oper_mitor_RUNYN`) VALUES ('" + SearchString + "', '-----', 'N') ON DUPLICATE KEY UPDATE `tsnon_oper_mitor_NOIC` = '-----', `tsnon_oper_mitor_RUNYN` = 'N'";                
                result = await MySQLHelper.ExecuteNonQueryAsync(GlobalHelper.MariaDBConectionString, sql);

                sql = @"ALTER TABLE `tsnon_oper_mitor` AUTO_INCREMENT= 1";
                result = await MySQLHelper.ExecuteNonQueryAsync(GlobalHelper.MariaDBConectionString, sql);
            }
            catch (Exception ex)
            {
                result = ex.Message;
            }

            return result;
        }
        public virtual async Task<string> C02_STOP_LoadAsync(string SearchString, string SearchString001)
        {
            string result = GlobalHelper.InitializationString;
            try
            {                
                string sql = @"INSERT INTO tsnon_oper_mitor(`tsnon_oper_mitor_MCNM`, `tsnon_oper_mitor_NOIC`, `tsnon_oper_mitor_RUNYN`) VALUES('" + SearchString + "', '" + SearchString001 + "', 'Y') ON DUPLICATE KEY UPDATE `tsnon_oper_mitor_NOIC`= '" + SearchString001 + "', `tsnon_oper_mitor_RUNYN` = 'Y'";
                result = await MySQLHelper.ExecuteNonQueryAsync(GlobalHelper.MariaDBConectionString, sql);

                sql = @"ALTER TABLE `tsnon_oper_mitor` AUTO_INCREMENT= 1";
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

