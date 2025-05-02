namespace MESService.Implement
{
    public class tsnon_worktimeService : BaseService<tsnon_worktime, Itsnon_worktimeRepository>
    , Itsnon_worktimeService
    {
    private readonly Itsnon_worktimeRepository _tsnon_worktimeRepository;
    public tsnon_worktimeService(Itsnon_worktimeRepository tsnon_worktimeRepository) : base(tsnon_worktimeRepository)
    {
    _tsnon_worktimeRepository = tsnon_worktimeRepository;
    }
    public override void Initialization(tsnon_worktime model)
    {
    BaseInitialization(model);
    }
    public override async Task<tsnon_worktime> SaveAsync(tsnon_worktime model)
    {
    try
    {
    if (model.TSNON_WT_IDX > 0)
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
    public virtual async Task<tsnon_worktime> Sync(tsnon_worktime model)
    {
    return model;
    }
    }
    }

