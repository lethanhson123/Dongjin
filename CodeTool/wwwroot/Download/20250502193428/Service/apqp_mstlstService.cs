namespace MESService.Implement
{
    public class apqp_mstlstService : BaseService<apqp_mstlst, Iapqp_mstlstRepository>
    , Iapqp_mstlstService
    {
    private readonly Iapqp_mstlstRepository _apqp_mstlstRepository;
    public apqp_mstlstService(Iapqp_mstlstRepository apqp_mstlstRepository) : base(apqp_mstlstRepository)
    {
    _apqp_mstlstRepository = apqp_mstlstRepository;
    }
    public override void Initialization(apqp_mstlst model)
    {
    BaseInitialization(model);
    }
    public override async Task<apqp_mstlst> SaveAsync(apqp_mstlst model)
    {
    try
    {
    if (model.APQP_MS_IDX > 0)
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
    public virtual async Task<apqp_mstlst> Sync(apqp_mstlst model)
    {
    return model;
    }
    }
    }

