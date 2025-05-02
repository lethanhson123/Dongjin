namespace MESService.Implement
{
    public class ttensilforce_uswService : BaseService<ttensilforce_usw, Ittensilforce_uswRepository>
    , Ittensilforce_uswService
    {
    private readonly Ittensilforce_uswRepository _ttensilforce_uswRepository;
    public ttensilforce_uswService(Ittensilforce_uswRepository ttensilforce_uswRepository) : base(ttensilforce_uswRepository)
    {
    _ttensilforce_uswRepository = ttensilforce_uswRepository;
    }
    public override void Initialization(ttensilforce_usw model)
    {
    BaseInitialization(model);
    }
    public override async Task<ttensilforce_usw> SaveAsync(ttensilforce_usw model)
    {
    try
    {
    if (model.FORCE_USW_IDX > 0)
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
    public virtual async Task<ttensilforce_usw> Sync(ttensilforce_usw model)
    {
    return model;
    }
    }
    }

