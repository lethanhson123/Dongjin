namespace MESService.Implement
{
    public class pdcdgrService : BaseService<pdcdgr, IpdcdgrRepository>
    , IpdcdgrService
    {
    private readonly IpdcdgrRepository _pdcdgrRepository;
    public pdcdgrService(IpdcdgrRepository pdcdgrRepository) : base(pdcdgrRepository)
    {
    _pdcdgrRepository = pdcdgrRepository;
    }
    public override void Initialization(pdcdgr model)
    {
    BaseInitialization(model);
    }
    public override async Task<pdcdgr> SaveAsync(pdcdgr model)
    {
    try
    {
    if (model.CDGR_IDX > 0)
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
    public virtual async Task<pdcdgr> Sync(pdcdgr model)
    {
    return model;
    }
    }
    }

