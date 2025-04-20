using MESData.Model;
using static System.Runtime.InteropServices.JavaScript.JSType;
using System.Text.RegularExpressions;
using System.Collections.Generic;
using System;

namespace MESService.Implement
{
    public class torderlistService : BaseService<torderlist, ItorderlistRepository>
    , ItorderlistService
    {
        private readonly ItorderlistRepository _torderlistRepository;
        public torderlistService(ItorderlistRepository torderlistRepository) : base(torderlistRepository)
        {
            _torderlistRepository = torderlistRepository;
        }
        public override void Initialization(torderlist model)
        {
            BaseInitialization(model);
        }
        public override async Task<torderlist> SaveAsync(torderlist model)
        {
            try
            {
                if (model.ORDER_IDX > 0)
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
        public virtual async Task<torderlist> Sync(torderlist model)
        {
            return model;
        }
        public virtual async Task<string> C02DB_LISECHKAsync()
        {
            string result = GlobalHelper.InitializationString;
            try
            {
                string sql = "UPDATE TORDERLIST SET `CONDITION`='Close',  `UPDATE_DTM` = NOW(),  `UPDATE_USER` = 'MES'  WHERE `DT` < DATE_ADD(NOW(), INTERVAL -11 DAY) AND NOT (TORDERLIST.`CONDITION` = 'Complete')  AND NOT (`CONDITION` = 'Close')";
                result = await MySQLHelper.ExecuteNonQueryAsync(GlobalHelper.MariaDBConectionString, sql);
            }
            catch (Exception ex)
            {
                result = ex.Message;
            }

            return result;
        }
        public virtual async Task<List<torderlist>> C02MC_LISTToListAsync(string SearchString)
        {
            List<torderlist> result = new List<torderlist>();
            try
            {
                string sqlSub = GlobalHelper.InitializationString;
                string MC_CHKE = SearchString.Substring(0, 1);
                switch (MC_CHKE)
                {
                    case "-":
                        sqlSub = "  AND TORDERLIST.FCTRY_NM = ''  ";
                        break;
                    case "A":
                        sqlSub = "  AND TORDERLIST.FCTRY_NM = 'Factory 1'  ";
                        break;
                    case "Z":
                        sqlSub = "  AND TORDERLIST.FCTRY_NM = 'Factory 2'  ";
                        break;
                }
                string sql = "SELECT DISTINCT IFNULL(MC2, MC) AS MC FROM TORDERLIST WHERE  (DSCN_YN = 'Y') AND (NOT (`CONDITION` = 'Close')) AND `DT` > DATE_SUB(NOW(),INTERVAL 12 DAY) " + sqlSub + " GROUP BY IFNULL(MC2, MC)";
                result = await GetByMySQLToListAsync(GlobalHelper.MariaDBConectionString, sql);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            if (result == null)
            {
                result = new List<torderlist>();
            }
            return result;
        }
        public virtual async Task<string> C02Buttonfind_ClickAsync()
        {
            string result = GlobalHelper.InitializationString;
            try
            {
                string sql = "UPDATE TORDERLIST SET `CONDITION` = 'Complete'  WHERE `TOT_QTY` <= `PERFORMN` AND NOT(`CONDITION`='Complete') AND `DT` > DATE_ADD(NOW(), INTERVAL -11 DAY)";
                result = await MySQLHelper.ExecuteNonQueryAsync(GlobalHelper.MariaDBConectionString, sql);
            }
            catch (Exception ex)
            {
                result = ex.Message;
            }

            return result;
        }
        public virtual async Task<List<torderlistTranfer>> C02Buttonfind_ClickToListAsync(string SearchString001, string SearchString002, string SearchString003, string SearchString004, string SearchString005, string SearchString006, DateTime Begin)
        {
            List<torderlistTranfer> result = new List<torderlistTranfer>();
            try
            {
                Begin = Begin.AddDays(-11);
                string sqlSub = GlobalHelper.InitializationString;
                string MC_CHKE = SearchString006.Substring(0, 1);
                switch (MC_CHKE)
                {
                    case "-":
                        sqlSub = "  AND TORDERLIST.FCTRY_NM = ''  ";
                        break;
                    case "A":
                        sqlSub = "  AND TORDERLIST.FCTRY_NM = 'Factory 1'  ";
                        break;
                    case "Z":
                        sqlSub = "  AND TORDERLIST.FCTRY_NM = 'Factory 2' ";
                        break;
                }
                string sql = @"SELECT 'FALSE' AS `CHK`, IF(SUM(IF(LEFT(`OR_NO`, 1) = 'N', 0, 1)) > 0, 'E', '') AS `OR_NO`, `WORK_WEEK`, ";
                sql = sql + "IF(IFNULL(SUM(CASE WHEN `CONDITION` = 'Stay' THEN 1 END), 1) + ";
                sql = sql + "IFNULL(SUM(CASE WHEN `CONDITION` = 'Working' THEN 1 END), 0) = 0, 'Close', ";
                sql = sql + "IF(IFNULL(SUM(`PERFORMN`), 0) = 0, 'Stay', IF(IFNULL(SUM(`PERFORMN`), 0) >= IFNULL(SUM(`TOT_QTY`), 0), 'Complete', 'Working'))) AS `CONDITION`, ";
                sql = sql + "MIN(`CREATE_DTM`) AS `CREATE_DTM`, `LEAD_NO`, `WIRE`, ";
                sql = sql + "IFNULL(SUM(`TOEXCEL_QTY`), 0) AS `TOEXCEL_QTY`, IFNULL(`B`.`QTY_STOCK`, 0) AS `QTY_STOCK`, SUM(`TOT_QTY`) AS `SUM_QTY`, (TOEXCEL_QTY - QTY_STOCK) AS REM_QTY, ";
                sql = sql + "SUM(`PERFORMN`) AS `ACT`, IFNULL(`MC2`, `MC`) AS `MC`, `ADJ_AF_QTY`, ";
                sql = sql + "`TERM1`, `SEAL1`, `TERM2`, `SEAL2`, `CCH_W1`, `ICH_W1`, `CCH_W2`, `ICH_W2`, `DT`, derivedtbl_1.`LS_DATE`, `PROJECT`, ";
                sql = sql + "`CUR_LEADS`, `CT_LEADS`, `CT_LEADS_PR`, `GRP`, `BUNDLE_SIZE`, `HOOK_RACK`, `T1_DIR`, `STRIP1`, `T2_DIR`, `STRIP2`, `SP_ST`, `REP` ";
                sql = sql + "FROM(TORDERLIST LEFT OUTER JOIN ";
                sql = sql + "(SELECT  TORDER_IDX, MAX(CREATE_DTM) AS LS_DATE  FROM   TWWKAR   GROUP BY TORDER_IDX) derivedtbl_1 ON TORDERLIST.ORDER_IDX = derivedtbl_1.TORDER_IDX) ";
                sql = sql + "LEFT OUTER JOIN(SELECT `LEAD_PN`, `QTY` AS `QTY_STOCK` FROM  torder_lead_bom LEFT OUTER JOIN tiivtr_lead ON LEAD_INDEX = PART_IDX  AND  tiivtr_lead.`LOC_IDX` = '3') AS `B` ON `B`.LEAD_PN = TORDERLIST.LEAD_NO ";
                sql = sql + "WHERE ((TORDERLIST.TERM1 LIKE '%" + SearchString001 + "%') OR (TORDERLIST.TERM2 LIKE '%" + SearchString001 + "%')) AND ";
                sql = sql + "((TORDERLIST.SEAL1 LIKE '%" + SearchString002 + "%') OR (TORDERLIST.SEAL2 LIKE '%" + SearchString002 + "%')) AND ";
                sql = sql + "(TORDERLIST.DSCN_YN = 'Y') AND(TORDERLIST.DT >= '" + Begin.ToString("yyyy-MM-dd") + " 00:00:00') ";
                sql = sql + "AND (TORDERLIST.LEAD_NO LIKE '%" + SearchString003 + "%') AND (TORDERLIST.`CONDITION` LIKE '%" + SearchString004 + "%') AND (IFNULL(TORDERLIST.MC2, TORDERLIST.MC) = '" + SearchString005 + "') ";
                sql = sql + "AND (NOT(TORDERLIST.`CONDITION` = 'Close')) " + sqlSub + " ";
                sql = sql + "GROUP BY TORDERLIST.`LEAD_NO`, `OR_NO` ";
                sql = sql + "ORDER BY  `CONDITION` DESC,  `LEAD_NO`,  `CREATE_DTM` ";

                DataSet ds = await MySQLHelper.FillDataSetBySQLAsync(GlobalHelper.MariaDBConectionString, sql);
                for (int i = 0; i < ds.Tables.Count; i++)
                {
                    DataTable dt = ds.Tables[i];
                    result.AddRange(SQLHelper.ToList<torderlistTranfer>(dt));
                }
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            if (result == null)
            {
                result = new List<torderlistTranfer>();
            }
            return result;
        }
        public virtual async Task<string> C02Buttonsave_ClickAsync(string SearchString001, string SearchString002, DateTime Begin)
        {
            string result = GlobalHelper.InitializationString;
            try
            {
                string BeginString = Begin.ToString("yyyy-MM-dd HH:mm:ss");
                string sql = "UPDATE TORDERLIST SET `MC2`='" + SearchString001 + "' WHERE `LEAD_NO` = '" + SearchString002 + "' AND  `CREATE_DTM` = '" + BeginString + "' ";
                result = await MySQLHelper.ExecuteNonQueryAsync(GlobalHelper.MariaDBConectionString, sql);
            }
            catch (Exception ex)
            {
                result = ex.Message;
            }

            return result;
        }
        public virtual async Task<string> C02Buttondelete_ClickAsync(string Acount, string SearchString001, DateTime Begin)
        {
            string result = GlobalHelper.InitializationString;
            try
            {
                string BeginString = Begin.ToString("yyyy-MM-dd HH:mm:ss");
                string sql = "UPDATE TORDERLIST SET `CONDITION`='Close', `UPDATE_DTM` = NOW(), `UPDATE_USER` = '" + Acount + "'   WHERE  NOT(`CONDITION`='Complete') AND   `LEAD_NO` = '" + SearchString001 + "' AND  `CREATE_DTM` = '" + BeginString + "'";
                result = await MySQLHelper.ExecuteNonQueryAsync(GlobalHelper.MariaDBConectionString, sql);
            }
            catch (Exception ex)
            {
                result = ex.Message;
            }

            return result;
        }
        public virtual async Task<List<torderlistTranfer>> C02_LISTButtonfind_ClickToListAsync(string SearchString001)
        {
            List<torderlistTranfer> result = new List<torderlistTranfer>();
            try
            {
                string sql = @"SELECT 'FALSE' AS `CHK`, IF(LEFT(`OR_NO`, 1)='N','','E') AS `OR_NO`, `WORK_WEEK`, `CONDITION`, `TORDER_FG`, `LEAD_NO`, IF(`CONDITION` = 'Stay' , IFNULL(`MTRL_RQUST` ,'N'), 'F') AS `MTRL_RQUST`, ";
                sql = sql + "`WIRE`, IFNULL(`TOEXCEL_QTY`, 0) AS `TOEXCEL_QTY`, IFNULL(`B`.`QTY_STOCK`, 0) AS `QTY_STOCK`, `TOT_QTY`, 0 AS `MES_QTY`, `PERFORMN`, IFNULL(`MC2`, `MC`) AS `MC`, `ADJ_AF_QTY`, `TERM1`, `SEAL1`, `TERM2`, `SEAL2`, `CCH_W1`, `ICH_W1`, `CCH_W2`, `ICH_W2`, `DT`, derivedtbl_1.`LS_DATE`, `PROJECT`, ";
                sql = sql + "`CUR_LEADS`, `CT_LEADS`, `CT_LEADS_PR`, `GRP`, `BUNDLE_SIZE`, `HOOK_RACK`, `T1_DIR`, `STRIP1`, `T2_DIR`, `STRIP2`, `SP_ST`, `DSCN_YN`, `REP`, `ORDER_IDX` ";
                sql = sql + "FROM  (TORDERLIST LEFT OUTER JOIN ";
                sql = sql + "(SELECT  TORDER_IDX, MAX(CREATE_DTM) AS LS_DATE  FROM   TWWKAR   GROUP BY TORDER_IDX) derivedtbl_1 ON TORDERLIST.ORDER_IDX = derivedtbl_1.TORDER_IDX) ";
                sql = sql + "LEFT OUTER JOIN   (SELECT `LEAD_PN`, `QTY` AS `QTY_STOCK` FROM  torder_lead_bom LEFT OUTER JOIN tiivtr_lead ON LEAD_INDEX = PART_IDX AND  tiivtr_lead.`LOC_IDX` = '3') AS `B` ON `B`.LEAD_PN = TORDERLIST.LEAD_NO ";
                sql = sql + "WHERE  TORDERLIST.`DSCN_YN` = 'Y' AND TORDERLIST.LEAD_NO = '" + SearchString001 + "'   AND  NOT(TORDERLIST.`CONDITION` = 'Close') ";
                sql = sql + "AND `DT` >= DATE_ADD(NOW(), INTERVAL - 15 DAY) ";
                sql = sql + "ORDER BY TORDERLIST.`CONDITION` DESC, TORDERLIST.DT DESC, TORDERLIST.LEAD_NO";

                DataSet ds = await MySQLHelper.FillDataSetBySQLAsync(GlobalHelper.MariaDBConectionString, sql);
                for (int i = 0; i < ds.Tables.Count; i++)
                {
                    DataTable dt = ds.Tables[i];
                    result.AddRange(SQLHelper.ToList<torderlistTranfer>(dt));
                }
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            if (result == null)
            {
                result = new List<torderlistTranfer>();
            }
            return result;
        }
        public virtual async Task<string> C02_LISTButtonsave_ClickAsync(int ID, string SearchString)
        {
            string result = GlobalHelper.InitializationString;
            try
            {
                string sql = "UPDATE TORDERLIST SET `MC2`='" + SearchString + "' WHERE `ORDER_IDX` = " + ID;
                result = await MySQLHelper.ExecuteNonQueryAsync(GlobalHelper.MariaDBConectionString, sql);
            }
            catch (Exception ex)
            {
                result = ex.Message;
            }

            return result;
        }
        public virtual async Task<string> C02_LISTButtondelete_ClickAsync(int ID)
        {
            string result = GlobalHelper.InitializationString;
            try
            {
                string sql = "UPDATE TORDERLIST SET `CONDITION`='Close' WHERE `ORDER_IDX` = " + ID;
                result = await MySQLHelper.ExecuteNonQueryAsync(GlobalHelper.MariaDBConectionString, sql);
            }
            catch (Exception ex)
            {
                result = ex.Message;
            }

            return result;
        }
        public virtual async Task<List<torderlistTranfer>> C02_LISTButton1_ClickToListAsync()
        {
            List<torderlistTranfer> result = new List<torderlistTranfer>();
            try
            {
                string sql = "SELECT `LEAD_NO`, SUM(`TOT_QTY`) AS `TOTAL_QTY`  FROM   TORDERLIST WHERE `CONDITION` = 'STAY' AND(IFNULL(`MC2`, `MC`) LIKE 'A8%' OR IFNULL(`MC2`, `MC`) LIKE 'PLAN') GROUP BY `LEAD_NO`";
                DataSet ds = await MySQLHelper.FillDataSetBySQLAsync(GlobalHelper.MariaDBConectionString, sql);
                for (int i = 0; i < ds.Tables.Count; i++)
                {
                    DataTable dt = ds.Tables[i];
                    result.AddRange(SQLHelper.ToList<torderlistTranfer>(dt));
                }
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            if (result == null)
            {
                result = new List<torderlistTranfer>();
            }
            return result;
        }
    }
}

