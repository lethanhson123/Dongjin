namespace MESService.Implement
{
    public class tmbrcd_longtermService : BaseService<tmbrcd_longterm, Itmbrcd_longtermRepository>
    , Itmbrcd_longtermService
    {
    private readonly Itmbrcd_longtermRepository _tmbrcd_longtermRepository;
    public tmbrcd_longtermService(Itmbrcd_longtermRepository tmbrcd_longtermRepository) : base(tmbrcd_longtermRepository)
    {
    _tmbrcd_longtermRepository = tmbrcd_longtermRepository;
    }
    public override void Initialization(tmbrcd_longterm model)
    {
    BaseInitialization(model);
    }
    public override async Task<tmbrcd_longterm> SaveAsync(tmbrcd_longterm model)
    {
    try
    {
    if (model.TMBRCD_LONGTERM_IDX > 0)
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
    public virtual async Task<tmbrcd_longterm> Sync(tmbrcd_longterm model)
    {
    return model;
    }
    }
    }

