namespace MESService.Interface
{
    public interface Itsnon_oper_mitorService : IBaseService<tsnon_oper_mitor>
    {
        Task<string> C02_LoadAsync(string SearchString);
        Task<string> C02_STOP_LoadAsync(string SearchString, string SearchString001);
    }
}

