namespace MESService.Interface
{
    public interface Itsnon_oper_andon_listService : IBaseService<tsnon_oper_andon_list>
    {
        Task<string> C02_STOP_LoadAsync(string Account, string SearchString);
        Task<string> C02_STOP_Button2_ClickAsync(string Account, string SearchString);
        Task<string> C02_STOP_Button1_ClickAsync(string Account, string SearchString);
    }
}

