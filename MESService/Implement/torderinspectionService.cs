namespace MESService.Implement
{
    public class torderinspectionService : BaseService<torderinspection, ItorderinspectionRepository>
    , ItorderinspectionService
    {
    private readonly ItorderinspectionRepository _torderinspectionRepository;
    public torderinspectionService(ItorderinspectionRepository torderinspectionRepository) : base(torderinspectionRepository)
    {
    _torderinspectionRepository = torderinspectionRepository;
    }
    public override void Initialization(torderinspection model)
    {
    BaseInitialization(model);
    }
    public override async Task<torderinspection> SaveAsync(torderinspection model)
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
    public virtual async Task<torderinspection> Sync(torderinspection model)
    {
    return model;
    }
    }
    }

