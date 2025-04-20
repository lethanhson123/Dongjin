using static System.Runtime.InteropServices.JavaScript.JSType;
using System.Collections.Concurrent;
using ZXing.QrCode.Internal;
using System.Collections.Generic;
using MESService.Model;

namespace MESService.Implement
{
    public class tspartService : BaseService<tspart, ItspartRepository>
    , ItspartService
    {
        private readonly ItspartRepository _tspartRepository;
        private readonly ItiivtrService _tiivtrService;
        private readonly ItscodeRepository _tscodeRepository;
        public tspartService(ItspartRepository tspartRepository, ItiivtrService tiivtrService, ItscodeRepository tscodeRepository) : base(tspartRepository)
        {
            _tspartRepository = tspartRepository;
            _tiivtrService = tiivtrService;
            _tscodeRepository = tscodeRepository;
        }
        public override void Initialization(tspart model)
        {
            BaseInitialization(model);
            model.UPDATE_DTM = GlobalHelper.InitializationDateTime;
            if (model.CREATE_DTM == null)
            {
                model.CREATE_DTM = model.UPDATE_DTM;
            }
        }
        public override async Task<tspart> SaveAsync(tspart model)
        {
            try
            {
                if (model.PART_IDX > 0)
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
        public virtual async Task<tspart> Sync(tspart model)
        {
            return model;
        }
        public virtual async Task<tspartTranfer> A001SaveAsync(tspartTranfer model)
        {
            int result = GlobalHelper.InitializationNumber;
            try
            {
                if (model.PART_LOC == "-00-")
                {
                    model.PART_LOC = " -  -";
                }
                tspart tspart = new tspart();
                tspart = model;
                if (tspart.PART_IDX > 0)
                {
                    result = await UpdateAsync(tspart);
                }
                else
                {
                    result = await AddAsync(tspart);
                }
                if (result > 0)
                {
                    await A001Sync(model);
                }
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return model;
        }
        public virtual async Task<tspart> A001Sync(tspartTranfer model)
        {
            if (model.PART_IDX > 0)
            {
                tiivtr tiivtr = new tiivtr();
                tiivtr.PART_IDX = model.PART_IDX;
                tiivtr.LOC_IDX = GlobalHelper.InitializationNumber;
                tiivtr.QTY = GlobalHelper.InitializationNumber;
                switch (model.CD_IDX)
                {
                    case 5:
                        tiivtr.LOC_IDX = 1;
                        break;
                    case 6:
                        tiivtr.LOC_IDX = 2;
                        break;
                }             
                await _tiivtrService.SaveAsync(tiivtr);
            }
            return model;
        }
        public virtual async Task<List<tspart>> A001GetByGROUPBYBOM_GRPToListAsync()
        {
            List<tspart> result = new List<tspart>();
            try
            {
                string sql = "SELECT BOM_GRP FROM tspart GROUP BY BOM_GRP";
                result = await GetByMySQLToListAsync(GlobalHelper.MariaDBConectionString, sql);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            if (result == null)
            {
                result = new List<tspart>();
            }
            return result;
        }
        public virtual async Task<List<tspart>> A001GetByGROUPBYPART_CARToListAsync(int PART_SCN)
        {
            List<tspart> result = new List<tspart>();
            try
            {
                string sql = "SELECT PART_CAR FROM tspart WHERE tspart.PART_SCN = " + PART_SCN + " GROUP BY PART_CAR";
                result = await GetByMySQLToListAsync(GlobalHelper.MariaDBConectionString, sql);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            if (result == null)
            {
                result = new List<tspart>();
            }
            return result;
        }
        public virtual async Task<List<tspart>> A001GetByGROUPBYPART_FMLToListAsync(int PART_SCN)
        {
            List<tspart> result = new List<tspart>();
            try
            {
                string sql = "SELECT PART_FML FROM tspart WHERE tspart.PART_SCN = " + PART_SCN + " GROUP BY PART_FML";
                result = await GetByMySQLToListAsync(GlobalHelper.MariaDBConectionString, sql);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            if (result == null)
            {
                result = new List<tspart>();
            }
            return result;
        }
        public virtual async Task<List<tspartTranfer>> A001GetBySearchToListAsync(string SearchString001, string SearchString002, string SearchString003, string SearchString004, string SearchString005, string SearchString006)
        {
            List<tspartTranfer> result = new List<tspartTranfer>();
            try
            {
                if (!string.IsNullOrEmpty(SearchString006))
                {
                    SearchString006 = " AND PART_SCN = (SELECT CD_IDX FROM TSCODE WHERE CD_NM_EN = '" + SearchString006 + "')";
                }
                string sql = "SELECT FALSE AS CHK, tspart.*, ";
                sql = sql + "tspart.PART_IDX AS CODE, tspart.PART_NO AS PART_NO, IFNULL(tspart.PART_SUPL, '') AS PART_SUPL, ";
                sql = sql + "tspart.PART_NM AS PART_NAME, tspart.BOM_GRP AS BOM_GROUP, ";
                sql = sql + "tspart.PART_CAR AS MODEL, tspart.PART_FML AS PART_FamilyPC, tspart.PART_SNP AS Packing_Unit, ";
                sql = sql + "(SELECT CD_NM_HAN FROM TSCODE WHERE TSCODE.CD_IDX = tspart.PART_SCN) AS Item_TypeK, ";
                sql = sql + "(SELECT CD_NM_EN FROM TSCODE WHERE TSCODE.CD_IDX = tspart.PART_SCN) AS Item_TypeE, ";
                sql = sql + "tspart.PART_LOC AS Location, tspart.PART_USENY AS PART_USE, ";
                sql = sql + "TM_A.PART_ENCNO, TM_A.PART_ECN_DATE, ";
                sql = sql + "tspart.CREATE_DTM AS Creation_date, tspart.CREATE_USER AS Creation_User, ";
                sql = sql + "tspart.UPDATE_DTM AS Update_Date, tspart.UPDATE_USER AS Update_User ";
                sql = sql + "FROM tspart LEFT JOIN ";
                sql = sql + "(SELECT TB_A.NO, TB_A.PART_IDX, TB_A.PART_ENCNO, TB_A.PART_ECN_DATE ";
                sql = sql + "FROM (SELECT ROW_NUMBER() OVER (PARTITION BY tspart_ecn.PART_IDX ORDER BY  tspart_ecn.PART_ECN_DATE DESC) AS NO,";
                sql = sql + "tspart_ecn.PART_IDX, tspart_ecn.PART_ENCNO, tspart_ecn.PART_ECN_DATE, tspart_ecn.PART_ECN_USENY FROM tspart_ecn ";
                sql = sql + "WHERE tspart_ecn.PART_ECN_USENY = 'Y' ) TB_A ";
                sql = sql + "WHERE TB_A.NO = '1') TM_A ";
                sql = sql + "ON tspart.PART_IDX = TM_A.PART_IDX ";
                sql = sql + "WHERE tspart.PART_NO LIKE '%" + SearchString001 + "%' AND tspart.PART_NM LIKE '%" + SearchString002 + "%'  AND tspart.PART_CAR LIKE  '%" + SearchString003 + "%' ";
                sql = sql + "AND tspart.PART_FML LIKE '%" + SearchString004 + "%' AND tspart.BOM_GRP LIKE '%" + SearchString005 + "%' " + SearchString006;
                DataSet ds = await MySQLHelper.FillDataSetBySQLAsync(GlobalHelper.MariaDBConectionString, sql);
                for (int i = 0; i < ds.Tables.Count; i++)
                {
                    DataTable dt = ds.Tables[i];
                    result.AddRange(SQLHelper.ToList<tspartTranfer>(dt));
                }
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            if (result == null)
            {
                result = new List<tspartTranfer>();
            }
            return result;
        }
        public virtual async Task<List<tspart>> A001TabPage2GetBySearchToListAsync(string SearchString, int ParentID)
        {
            List<tspart> result = new List<tspart>();
            try
            {               
                string sql = "SELECT PART_IDX, PART_NO FROM tspart WHERE PART_USENY='Y' AND PART_SCN LIKE '%" + ParentID + "%' AND PART_NO LIKE '%" + SearchString + "%'";
                result = await GetByMySQLToListAsync(GlobalHelper.MariaDBConectionString, sql);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            if (result == null)
            {
                result = new List<tspart>();
            }
            return result;
        }
    }
}

