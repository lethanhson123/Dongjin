namespace MESService.Implement
{
    public class zt_devlpmnt_dbService : BaseService<zt_devlpmnt_db, Izt_devlpmnt_dbRepository>
    , Izt_devlpmnt_dbService
    {
    private readonly Izt_devlpmnt_dbRepository _zt_devlpmnt_dbRepository;
    public zt_devlpmnt_dbService(Izt_devlpmnt_dbRepository zt_devlpmnt_dbRepository) : base(zt_devlpmnt_dbRepository)
    {
    _zt_devlpmnt_dbRepository = zt_devlpmnt_dbRepository;
    }
    public override void Initialization(zt_devlpmnt_db model)
    {
    BaseInitialization(model);
    }
    public override async Task<zt_devlpmnt_db> SaveAsync(zt_devlpmnt_db model)
    {
    try
    {
    if (model.DELP_IDX > 0)
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
    public virtual async Task<zt_devlpmnt_db> Sync(zt_devlpmnt_db model)
    {
    return model;
    }
    }
    }

