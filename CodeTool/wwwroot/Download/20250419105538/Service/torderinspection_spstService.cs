namespace MESService.Implement
{
    public class torderinspection_spstService : BaseService<torderinspection_spst, Itorderinspection_spstRepository>
    , Itorderinspection_spstService
    {
    private readonly Itorderinspection_spstRepository _torderinspection_spstRepository;
    public torderinspection_spstService(Itorderinspection_spstRepository torderinspection_spstRepository) : base(torderinspection_spstRepository)
    {
    _torderinspection_spstRepository = torderinspection_spstRepository;
    }
    public override void Initialization(torderinspection_spst model)
    {
    BaseInitialization(model);
    }
    public override async Task<torderinspection_spst> SaveAsync(torderinspection_spst model)
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
    public virtual async Task<torderinspection_spst> Sync(torderinspection_spst model)
    {
    return model;
    }
    }
    }

