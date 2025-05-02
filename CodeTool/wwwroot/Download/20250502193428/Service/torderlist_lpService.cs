namespace MESService.Implement
{
    public class torderlist_lpService : BaseService<torderlist_lp, Itorderlist_lpRepository>
    , Itorderlist_lpService
    {
    private readonly Itorderlist_lpRepository _torderlist_lpRepository;
    public torderlist_lpService(Itorderlist_lpRepository torderlist_lpRepository) : base(torderlist_lpRepository)
    {
    _torderlist_lpRepository = torderlist_lpRepository;
    }
    public override void Initialization(torderlist_lp model)
    {
    BaseInitialization(model);
    }
    public override async Task<torderlist_lp> SaveAsync(torderlist_lp model)
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
    public virtual async Task<torderlist_lp> Sync(torderlist_lp model)
    {
    return model;
    }
    }
    }

