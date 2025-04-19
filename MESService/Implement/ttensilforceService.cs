namespace MESService.Implement
{
    public class ttensilforceService : BaseService<ttensilforce, IttensilforceRepository>
    , IttensilforceService
    {
    private readonly IttensilforceRepository _ttensilforceRepository;
    public ttensilforceService(IttensilforceRepository ttensilforceRepository) : base(ttensilforceRepository)
    {
    _ttensilforceRepository = ttensilforceRepository;
    }
    public override void Initialization(ttensilforce model)
    {
    BaseInitialization(model);
    }
    public override async Task<ttensilforce> SaveAsync(ttensilforce model)
    {
    try
    {
    if (model.FORCE_IDX > 0)
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
    public virtual async Task<ttensilforce> Sync(ttensilforce model)
    {
    return model;
    }
    }
    }

