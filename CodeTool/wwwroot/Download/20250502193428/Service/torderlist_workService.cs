namespace MESService.Implement
{
    public class torderlist_workService : BaseService<torderlist_work, Itorderlist_workRepository>
    , Itorderlist_workService
    {
    private readonly Itorderlist_workRepository _torderlist_workRepository;
    public torderlist_workService(Itorderlist_workRepository torderlist_workRepository) : base(torderlist_workRepository)
    {
    _torderlist_workRepository = torderlist_workRepository;
    }
    public override void Initialization(torderlist_work model)
    {
    BaseInitialization(model);
    }
    public override async Task<torderlist_work> SaveAsync(torderlist_work model)
    {
    try
    {
    if (model.TORDERLIST_WORK_IDX > 0)
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
    public virtual async Task<torderlist_work> Sync(torderlist_work model)
    {
    return model;
    }
    }
    }

