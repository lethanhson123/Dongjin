namespace MESService.Implement
{
    public class zt_log_dbService : BaseService<zt_log_db, Izt_log_dbRepository>
    , Izt_log_dbService
    {
    private readonly Izt_log_dbRepository _zt_log_dbRepository;
    public zt_log_dbService(Izt_log_dbRepository zt_log_dbRepository) : base(zt_log_dbRepository)
    {
    _zt_log_dbRepository = zt_log_dbRepository;
    }
    public override void Initialization(zt_log_db model)
    {
    BaseInitialization(model);
    }
    public override async Task<zt_log_db> SaveAsync(zt_log_db model)
    {
    try
    {
    if (model.IDX > 0)
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
    public virtual async Task<zt_log_db> Sync(zt_log_db model)
    {
    return model;
    }
    }
    }

