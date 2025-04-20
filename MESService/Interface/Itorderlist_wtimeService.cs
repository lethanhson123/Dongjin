namespace MESService.Interface
{
    public interface Itorderlist_wtimeService : IBaseService<torderlist_wtime>
    {
        Task<string> C02_STOP_SW_TIMEAsync(string Account, string SearchString, string SearchString001, string SearchString002, DateTime Begin);
        Task<List<torderlist_wtime>> C02_STOP_SW_TIMEToListAsync(DateTime Begin);
        Task<string> C02_STOP_EW_TIMEAsync(string SearchString);
    }
}

