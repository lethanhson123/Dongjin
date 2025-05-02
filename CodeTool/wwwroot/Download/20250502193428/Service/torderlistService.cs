namespace MESService.Implement
{
    public class torderlistService : BaseService<torderlist, ItorderlistRepository>
    , ItorderlistService
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public torderlistService(ItorderlistRepository torderlistRepository) : base(torderlistRepository)
    {
    _torderlistRepository = torderlistRepository;
    }
    public override void Initialization(torderlist model)
    {
    BaseInitialization(model);
    }
    public override async Task<torderlist> SaveAsync(torderlist model)
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
    public virtual async Task<torderlist> Sync(torderlist model)
    {
    return model;
    }
    }
    }

