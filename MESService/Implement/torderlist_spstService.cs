namespace MESService.Implement
{
    public class torderlist_spstService : BaseService<torderlist_spst, Itorderlist_spstRepository>
    , Itorderlist_spstService
    {
    private readonly Itorderlist_spstRepository _torderlist_spstRepository;
    public torderlist_spstService(Itorderlist_spstRepository torderlist_spstRepository) : base(torderlist_spstRepository)
    {
    _torderlist_spstRepository = torderlist_spstRepository;
    }
    public override void Initialization(torderlist_spst model)
    {
    BaseInitialization(model);
    }
    public override async Task<torderlist_spst> SaveAsync(torderlist_spst model)
    {
    try
    {
    if (model.ORDER_IDX > 0)
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
    public virtual async Task<torderlist_spst> Sync(torderlist_spst model)
    {
    return model;
    }
    }
    }

