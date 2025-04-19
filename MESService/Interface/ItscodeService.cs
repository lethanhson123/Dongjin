namespace MESService.Interface
{
    public interface ItscodeService : IBaseService<tscode>
    {
        Task<List<tscode>> A001GetByCDGR_IDXToListAsync(int CDGR_IDX);
    }
}

