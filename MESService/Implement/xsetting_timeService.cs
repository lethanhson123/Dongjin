namespace MESService.Implement
{
    public class xsetting_timeService : BaseService<xsetting_time, Ixsetting_timeRepository>
    , Ixsetting_timeService
    {
    private readonly Ixsetting_timeRepository _xsetting_timeRepository;
    public xsetting_timeService(Ixsetting_timeRepository xsetting_timeRepository) : base(xsetting_timeRepository)
    {
    _xsetting_timeRepository = xsetting_timeRepository;
    }
    public override void Initialization(xsetting_time model)
    {
    BaseInitialization(model);
    }
    public override async Task<xsetting_time> SaveAsync(xsetting_time model)
    {
    try
    {
    if (model.SETTING_IDX > 0)
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
    public virtual async Task<xsetting_time> Sync(xsetting_time model)
    {
    return model;
    }
    }
    }

