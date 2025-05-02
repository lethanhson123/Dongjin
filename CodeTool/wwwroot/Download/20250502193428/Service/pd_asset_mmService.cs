namespace MESService.Implement
{
    public class pd_asset_mmService : BaseService<pd_asset_mm, Ipd_asset_mmRepository>
    , Ipd_asset_mmService
    {
    private readonly Ipd_asset_mmRepository _pd_asset_mmRepository;
    public pd_asset_mmService(Ipd_asset_mmRepository pd_asset_mmRepository) : base(pd_asset_mmRepository)
    {
    _pd_asset_mmRepository = pd_asset_mmRepository;
    }
    public override void Initialization(pd_asset_mm model)
    {
    BaseInitialization(model);
    }
    public override async Task<pd_asset_mm> SaveAsync(pd_asset_mm model)
    {
    try
    {
    if (model.PD_ASSET_IDX > 0)
    {
    await UpdateAsync(model);
    }
    else
    {
    await AddAsync(model);
    }
    await Sync(model);
    }
    catch (Exception ex)
    {
    string mes = ex.Message;
    }
    return model;
    }
    public virtual async Task<pd_asset_mm> Sync(pd_asset_mm model)
    {
    return model;
    }
    }
    }

