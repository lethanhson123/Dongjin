namespace MESService.Implement
{
    public class torderinspection_swService : BaseService<torderinspection_sw, Itorderinspection_swRepository>
    , Itorderinspection_swService
    {
    private readonly Itorderinspection_swRepository _torderinspection_swRepository;
    public torderinspection_swService(Itorderinspection_swRepository torderinspection_swRepository) : base(torderinspection_swRepository)
    {
    _torderinspection_swRepository = torderinspection_swRepository;
    }
    public override void Initialization(torderinspection_sw model)
    {
    BaseInitialization(model);
    }
    public override async Task<torderinspection_sw> SaveAsync(torderinspection_sw model)
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
    public virtual async Task<torderinspection_sw> Sync(torderinspection_sw model)
    {
    return model;
    }
    }
    }

