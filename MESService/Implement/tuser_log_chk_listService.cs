namespace MESService.Implement
{
    public class tuser_log_chk_listService : BaseService<tuser_log_chk_list, Ituser_log_chk_listRepository>
    , Ituser_log_chk_listService
    {
    private readonly Ituser_log_chk_listRepository _tuser_log_chk_listRepository;
    public tuser_log_chk_listService(Ituser_log_chk_listRepository tuser_log_chk_listRepository) : base(tuser_log_chk_listRepository)
    {
    _tuser_log_chk_listRepository = tuser_log_chk_listRepository;
    }
    public override void Initialization(tuser_log_chk_list model)
    {
    BaseInitialization(model);
    }
    public override async Task<tuser_log_chk_list> SaveAsync(tuser_log_chk_list model)
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
    public virtual async Task<tuser_log_chk_list> Sync(tuser_log_chk_list model)
    {
    return model;
    }
    }
    }

