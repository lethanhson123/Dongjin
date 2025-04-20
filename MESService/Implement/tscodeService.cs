using static System.Runtime.InteropServices.JavaScript.JSType;

namespace MESService.Implement
{
    public class tscodeService : BaseService<tscode, ItscodeRepository>
    , ItscodeService
    {
        private readonly ItscodeRepository _tscodeRepository;
        public tscodeService(ItscodeRepository tscodeRepository) : base(tscodeRepository)
        {
            _tscodeRepository = tscodeRepository;
        }
        public override void Initialization(tscode model)
        {
            BaseInitialization(model);
        }
        public override async Task<tscode> SaveAsync(tscode model)
        {
            try
            {
                if (model.CD_IDX > 0)
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
        public virtual async Task<tscode> Sync(tscode model)
        {
            return model;
        }
        public virtual async Task<List<tscode>> A001GetByCDGR_IDXToListAsync(int CDGR_IDX)
        {
            List<tscode> result = new List<tscode>();
            try
            {                
                result = await GetByCondition(item => item.CDGR_IDX == CDGR_IDX).ToListAsync();                
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            if (result == null)
            {
                result = new List<tscode>();
            }
            return result;
        }
        public virtual async Task<List<tscode>> C02_LoadToListAsync(string SearchString)
        {
            List<tscode> result = new List<tscode>();
            try
            {
                string sql = "SELECT `CD_IDX`, `CD_SYS_NOTE` FROM TSCODE WHERE `CDGR_IDX` = '8' AND NOT(`CD_IDX` = '594') AND `CD_SYS_NOTE` = '" + SearchString + "' ";
                result = await GetByMySQLToListAsync(GlobalHelper.MariaDBConectionString, sql);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            if (result == null)
            {
                result = new List<tscode>();
            }
            return result;
        }
    }
}

