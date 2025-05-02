namespace MESService.Implement
{
    public class tuser_logService : BaseService<tuser_log, Ituser_logRepository>
    , Ituser_logService
    {
    private readonly Ituser_logRepository _tuser_logRepository;
    public tuser_logService(Ituser_logRepository tuser_logRepository) : base(tuser_logRepository)
    {
    _tuser_logRepository = tuser_logRepository;
    }
    public override void Initialization(tuser_log model)
    {
    BaseInitialization(model);
    }
    public override async Task<tuser_log> SaveAsync(tuser_log model)
    {
    try
    {
    if (model.TUSER_IDX > 0)
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
    public virtual async Task<tuser_log> Sync(tuser_log model)
    {
    return model;
    }
    }
    }

