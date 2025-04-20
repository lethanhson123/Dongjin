namespace MESService.Interface
{
    public interface ItorderlistService : IBaseService<torderlist>
    {
        Task<string> C02DB_LISECHKAsync();
        Task<List<torderlist>> C02MC_LISTToListAsync(string SearchString);
        Task<string> C02Buttonfind_ClickAsync();
        Task<List<torderlistTranfer>> C02Buttonfind_ClickToListAsync(string SearchString001, string SearchString002, string SearchString003, string SearchString004, string SearchString005, string SearchString006, DateTime Begin);
        Task<string> C02Buttonsave_ClickAsync(string SearchString001, string SearchString002, DateTime Begin);
        Task<string> C02Buttondelete_ClickAsync(string Acount, string SearchString001, DateTime Begin);
        Task<List<torderlistTranfer>> C02_LISTButtonfind_ClickToListAsync(string SearchString001);
        Task<string> C02_LISTButtonsave_ClickAsync(int ID, string SearchString);
        Task<string> C02_LISTButtondelete_ClickAsync(int ID);
        Task<List<torderlistTranfer>> C02_LISTButton1_ClickToListAsync();

    }
}

