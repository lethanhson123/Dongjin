namespace MESService.Implement
{
    public class tscostService : BaseService<tscost, ItscostRepository>
    , ItscostService
    {
    private readonly ItscostRepository _tscostRepository;
    public tscostService(ItscostRepository tscostRepository) : base(tscostRepository)
    {
    _tscostRepository = tscostRepository;
    }
    public override void Initialization(tscost model)
    {
    BaseInitialization(model);
    }
    public override async Task<tscost> SaveAsync(tscost model)
    {
    try
    {
    if (model.TSCOST_IDX > 0)
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
    public virtual async Task<tscost> Sync(tscost model)
    {
    return model;
    }
    }
    }

