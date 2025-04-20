using MESData.Model;
using System.Collections.Generic;

namespace MESService.Implement
{
    public class tsnon_oper_andon_listService : BaseService<tsnon_oper_andon_list, Itsnon_oper_andon_listRepository>
    , Itsnon_oper_andon_listService
    {
        private readonly Itsnon_oper_andon_listRepository _tsnon_oper_andon_listRepository;
        public tsnon_oper_andon_listService(Itsnon_oper_andon_listRepository tsnon_oper_andon_listRepository) : base(tsnon_oper_andon_listRepository)
        {
            _tsnon_oper_andon_listRepository = tsnon_oper_andon_listRepository;
        }
        public override void Initialization(tsnon_oper_andon_list model)
        {
            BaseInitialization(model);
        }
        public override async Task<tsnon_oper_andon_list> SaveAsync(tsnon_oper_andon_list model)
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
        public virtual async Task<tsnon_oper_andon_list> Sync(tsnon_oper_andon_list model)
        {
            return model;
        }
        public virtual async Task<string> C02_STOP_LoadAsync(string Account, string SearchString)
        {
            string result = GlobalHelper.InitializationString;
            try
            {

                string sql = @"INSERT INTO  `tsnon_oper_andon_LIST` (`tsnon_oper_mitor_MCNM`, `tsnon_oper_mitor_NOIC`, `tsnon_oper_mitor_RUNYN`, `CREATE_DTM`, `CREATE_USER`) VALUES ('" + SearchString + "', 'MC STOP', 'Y', NOW(), '" + Account + "')     ";
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

                string sql = @"INSERT INTO  `tsnon_oper_andon_LIST` (`tsnon_oper_mitor_MCNM`, `tsnon_oper_mitor_NOIC`, `tsnon_oper_mitor_RUNYN`, `CREATE_DTM`, `CREATE_USER`) VALUES ('" + SearchString + "', 'MC STOP', 'I', NOW(), '" + Account + "')";
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

                string sql = @"INSERT INTO  `tsnon_oper_andon_LIST` (`tsnon_oper_mitor_MCNM`, `tsnon_oper_mitor_NOIC`, `tsnon_oper_mitor_RUNYN`, `CREATE_DTM`, `CREATE_USER`) VALUES ('" + SearchString + "', 'MC STOP', 'N', NOW(), '" + Account + "')";
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

