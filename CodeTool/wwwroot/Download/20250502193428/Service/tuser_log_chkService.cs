namespace MESService.Implement
{
    public class tuser_log_chkService : BaseService<tuser_log_chk, Ituser_log_chkRepository>
    , Ituser_log_chkService
    {
    private readonly Ituser_log_chkRepository _tuser_log_chkRepository;
    public tuser_log_chkService(Ituser_log_chkRepository tuser_log_chkRepository) : base(tuser_log_chkRepository)
    {
    _tuser_log_chkRepository = tuser_log_chkRepository;
    }
    public override void Initialization(tuser_log_chk model)
    {
    BaseInitialization(model);
    }
    public override async Task<tuser_log_chk> SaveAsync(tuser_log_chk model)
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
    public virtual async Task<tuser_log_chk> Sync(tuser_log_chk model)
    {
    return model;
    }
    }
    }

