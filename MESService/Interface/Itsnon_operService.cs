namespace MESService.Interface
{
    public interface Itsnon_operService : IBaseService<tsnon_oper>
    {
        Task<string> C02_STOP_LoadAsync(string Account, string SearchString, string SearchString001, DateTime Begin);
        Task<List<tsnon_oper>> C02_STOP_LoadToListAsync(DateTime Begin);
    }
}

