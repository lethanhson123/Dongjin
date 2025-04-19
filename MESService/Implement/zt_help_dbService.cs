namespace MESService.Implement
{
    public class zt_help_dbService : BaseService<zt_help_db, Izt_help_dbRepository>
    , Izt_help_dbService
    {
    private readonly Izt_help_dbRepository _zt_help_dbRepository;
    public zt_help_dbService(Izt_help_dbRepository zt_help_dbRepository) : base(zt_help_dbRepository)
    {
    _zt_help_dbRepository = zt_help_dbRepository;
    }
    public override void Initialization(zt_help_db model)
    {
    BaseInitialization(model);
    }
    public override async Task<zt_help_db> SaveAsync(zt_help_db model)
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
    public virtual async Task<zt_help_db> Sync(zt_help_db model)
    {
    return model;
    }
    }
    }

