namespace MESService.Implement
{
    public class torderlist_swService : BaseService<torderlist_sw, Itorderlist_swRepository>
    , Itorderlist_swService
    {
    private readonly Itorderlist_swRepository _torderlist_swRepository;
    public torderlist_swService(Itorderlist_swRepository torderlist_swRepository) : base(torderlist_swRepository)
    {
    _torderlist_swRepository = torderlist_swRepository;
    }
    public override void Initialization(torderlist_sw model)
    {
    BaseInitialization(model);
    }
    public override async Task<torderlist_sw> SaveAsync(torderlist_sw model)
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
    public virtual async Task<torderlist_sw> Sync(torderlist_sw model)
    {
    return model;
    }
    }
    }

