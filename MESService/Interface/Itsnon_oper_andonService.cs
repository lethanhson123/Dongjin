namespace MESService.Interface
{
    public interface Itsnon_oper_andonService : IBaseService<tsnon_oper_andon>
    {
        Task<string> C02_STOP_LoadAsync(string Account, string SearchString);
        Task<string> C02_STOP_Button2_ClickAsync(string Account, string SearchString);
        Task<string> C02_STOP_Button1_ClickAsync(string Account, string SearchString);
    }
}

