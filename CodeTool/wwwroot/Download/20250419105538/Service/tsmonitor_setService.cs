namespace MESService.Implement
{
    public class tsmonitor_setService : BaseService<tsmonitor_set, Itsmonitor_setRepository>
    , Itsmonitor_setService
    {
    private readonly Itsmonitor_setRepository _tsmonitor_setRepository;
    public tsmonitor_setService(Itsmonitor_setRepository tsmonitor_setRepository) : base(tsmonitor_setRepository)
    {
    _tsmonitor_setRepository = tsmonitor_setRepository;
    }
    public override void Initialization(tsmonitor_set model)
    {
    BaseInitialization(model);
    }
    public override async Task<tsmonitor_set> SaveAsync(tsmonitor_set model)
    {
    try
    {
    if (model.TSMONITOR_SET_IDX > 0)
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
    public virtual async Task<tsmonitor_set> Sync(tsmonitor_set model)
    {
    return model;
    }
    }
    }

