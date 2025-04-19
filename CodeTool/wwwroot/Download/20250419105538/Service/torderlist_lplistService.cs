namespace MESService.Implement
{
    public class torderlist_lplistService : BaseService<torderlist_lplist, Itorderlist_lplistRepository>
    , Itorderlist_lplistService
    {
    private readonly Itorderlist_lplistRepository _torderlist_lplistRepository;
    public torderlist_lplistService(Itorderlist_lplistRepository torderlist_lplistRepository) : base(torderlist_lplistRepository)
    {
    _torderlist_lplistRepository = torderlist_lplistRepository;
    }
    public override void Initialization(torderlist_lplist model)
    {
    BaseInitialization(model);
    }
    public override async Task<torderlist_lplist> SaveAsync(torderlist_lplist model)
    {
    try
    {
    if (model.TORDERLIST_LPLIST_IDX > 0)
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
    public virtual async Task<torderlist_lplist> Sync(torderlist_lplist model)
    {
    return model;
    }
    }
    }

