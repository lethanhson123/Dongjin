using System.Collections.Generic;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace MESService.Implement
{
    public class tspart_ecnService : BaseService<tspart_ecn, Itspart_ecnRepository>
    , Itspart_ecnService
    {
        private readonly Itspart_ecnRepository _tspart_ecnRepository;
        public tspart_ecnService(Itspart_ecnRepository tspart_ecnRepository) : base(tspart_ecnRepository)
        {
            _tspart_ecnRepository = tspart_ecnRepository;
        }
        public override void Initialization(tspart_ecn model)
        {
            BaseInitialization(model);
        }
        public override async Task<tspart_ecn> SaveAsync(tspart_ecn model)
        {
            try
            {
                if (model.PARTECN_IDX > 0)
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
        public virtual async Task<tspart_ecn> Sync(tspart_ecn model)
        {
            return model;
        }
        public virtual async Task<List<tspart_ecnTranfer>> A001TabPage2GetBySearchToListAsync(int ParentID)
        {
            List<tspart_ecnTranfer> result = new List<tspart_ecnTranfer>();
            try
            {
                string sql = "SELECT (SELECT `PART_NO` FROM tspart WHERE tspart.PART_IDX = tspart_ecn.`PART_IDX`) AS `PART_NO`, ";
                sql = sql + "(SELECT `PART_NM` FROM tspart WHERE tspart.PART_IDX = tspart_ecn.`PART_IDX`) AS `PART_NAME`, ";
                sql = sql + "tspart_ecn.`PART_ECN_DATE`, tspart_ecn.`PART_ENCNO`, IFNULL(tspart_ecn.`DWG_NO`, '') AS `DWG_NO`, ";
                sql = sql + "'PDF Viewer' AS `FVWR`, ";
                sql = sql + "IFNULL(tspart_ecn.`DWG_FILE_GRP`, '') AS `DWG_FILE_GRP`, ";
                sql = sql + "'FILE_Down' AS `ADDFILE`, ";
                sql = sql + "tspart_ecn.`CREATE_DTM`, tspart_ecn.`CREATE_USER`, tspart_ecn.`UPDATE_DTM`, tspart_ecn.`UPDATE_USER`, tspart_ecn.`PARTECN_IDX`, ";
                sql = sql + "IFNULL(tspart_ecn.`DWG_FILE_EXPOR`, '') AS `DWG_FILE_EXPOR` ";
                sql = sql + "FROM tspart_ecn ";
                sql = sql + "WHERE tspart_ecn.`PART_ECN_USENY` = 'Y' AND tspart_ecn.`PART_IDX` = '" + ParentID + "' ";
                sql = sql + "ORDER BY    tspart_ecn.`PART_ECN_DATE` DESC , tspart_ecn.`PART_ENCNO`   DESC    ";
                DataSet ds = await HelperMySQL.MySQLHelper.FillDataSetBySQLAsync(GlobalHelper.MariaDBConectionString, sql);
                for (int i = 0; i < ds.Tables.Count; i++)
                {
                    DataTable dt = ds.Tables[i];
                    result.AddRange(SQLHelper.ToList<tspart_ecnTranfer>(dt));
                }
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            if (result == null)
            {
                result = new List<tspart_ecnTranfer>();
            }
            return result;
        }
    }
}

