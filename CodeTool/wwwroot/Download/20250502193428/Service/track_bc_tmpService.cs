namespace MESService.Implement
{
    public class track_bc_tmpService : BaseService<track_bc_tmp, Itrack_bc_tmpRepository>
    , Itrack_bc_tmpService
    {
    private readonly Itrack_bc_tmpRepository _track_bc_tmpRepository;
    public track_bc_tmpService(Itrack_bc_tmpRepository track_bc_tmpRepository) : base(track_bc_tmpRepository)
    {
    _track_bc_tmpRepository = track_bc_tmpRepository;
    }
    public override void Initialization(track_bc_tmp model)
    {
    BaseInitialization(model);
    }
    public override async Task<track_bc_tmp> SaveAsync(track_bc_tmp model)
    {
    try
    {
    if (model.TRACK_BC_IDX > 0)
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
    public virtual async Task<track_bc_tmp> Sync(track_bc_tmp model)
    {
    return model;
    }
    }
    }

