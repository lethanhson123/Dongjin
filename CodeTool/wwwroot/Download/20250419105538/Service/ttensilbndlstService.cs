namespace MESService.Implement
{
    public class ttensilbndlstService : BaseService<ttensilbndlst, IttensilbndlstRepository>
    , IttensilbndlstService
    {
    private readonly IttensilbndlstRepository _ttensilbndlstRepository;
    public ttensilbndlstService(IttensilbndlstRepository ttensilbndlstRepository) : base(ttensilbndlstRepository)
    {
    _ttensilbndlstRepository = ttensilbndlstRepository;
    }
    public override void Initialization(ttensilbndlst model)
    {
    BaseInitialization(model);
    }
    public override async Task<ttensilbndlst> SaveAsync(ttensilbndlst model)
    {
    try
    {
    if (model.BNDLST_IDX > 0)
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
    public virtual async Task<ttensilbndlst> Sync(ttensilbndlst model)
    {
    return model;
    }
    }
    }

