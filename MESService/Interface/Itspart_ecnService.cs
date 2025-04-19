namespace MESService.Interface
{
    public interface Itspart_ecnService : IBaseService<tspart_ecn>
    {
        Task<List<tspart_ecnTranfer>> A001TabPage2GetBySearchToListAsync(int ParentID);
    }
}

