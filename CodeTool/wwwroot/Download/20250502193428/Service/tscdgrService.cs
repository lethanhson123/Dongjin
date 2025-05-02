namespace MESService.Implement
{
    public class tscdgrService : BaseService<tscdgr, ItscdgrRepository>
    , ItscdgrService
    {
    private readonly ItscdgrRepository _tscdgrRepository;
    public tscdgrService(ItscdgrRepository tscdgrRepository) : base(tscdgrRepository)
    {
    _tscdgrRepository = tscdgrRepository;
    }
    public override void Initialization(tscdgr model)
    {
    BaseInitialization(model);
    }
    public override async Task<tscdgr> SaveAsync(tscdgr model)
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
    public virtual async Task<tscdgr> Sync(tscdgr model)
    {
    return model;
    }
    }
    }

