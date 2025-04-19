namespace MESService.Implement
{
    public class torderinspection_lpService : BaseService<torderinspection_lp, Itorderinspection_lpRepository>
    , Itorderinspection_lpService
    {
    private readonly Itorderinspection_lpRepository _torderinspection_lpRepository;
    public torderinspection_lpService(Itorderinspection_lpRepository torderinspection_lpRepository) : base(torderinspection_lpRepository)
    {
    _torderinspection_lpRepository = torderinspection_lpRepository;
    }
    public override void Initialization(torderinspection_lp model)
    {
    BaseInitialization(model);
    }
    public override async Task<torderinspection_lp> SaveAsync(torderinspection_lp model)
    {
    try
    {
    if (model.INSPECTION_IDX > 0)
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
    public virtual async Task<torderinspection_lp> Sync(torderinspection_lp model)
    {
    return model;
    }
    }
    }

