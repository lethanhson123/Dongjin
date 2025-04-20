namespace MESService.Interface
{
    public interface Ituser_logService : IBaseService<tuser_log>
    {
        Task<List<tuser_log>> C02TS_USERToListAsync(string SearchString, string Account);
        Task<List<tuser_log>> C02TS_USERUSER_TIMEToListAsync(string SearchString);
    }
}

