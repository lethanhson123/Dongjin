namespace MESService.Interface
{
    public interface ItspartService : IBaseService<tspart>
    {
        Task<tspartTranfer> A001SaveAsync(tspartTranfer model);
        Task<List<tspart>> A001GetByGROUPBYBOM_GRPToListAsync();
        Task<List<tspart>> A001GetByGROUPBYPART_CARToListAsync(int PART_SCN);
        Task<List<tspart>> A001GetByGROUPBYPART_FMLToListAsync(int PART_SCN);
        Task<List<tspartTranfer>> A001GetBySearchToListAsync(string SearchString001, string SearchString002, string SearchString003, string SearchString004, string SearchString005, string SearchString006);
        Task<List<tspart>> A001TabPage2GetBySearchToListAsync(string SearchString, int ParentID);
    }
}

