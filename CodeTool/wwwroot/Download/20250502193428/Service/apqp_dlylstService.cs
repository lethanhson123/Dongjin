namespace MESService.Implement
{
    public class apqp_dlylstService : BaseService<apqp_dlylst, Iapqp_dlylstRepository>
    , Iapqp_dlylstService
    {
    private readonly Iapqp_dlylstRepository _apqp_dlylstRepository;
    public apqp_dlylstService(Iapqp_dlylstRepository apqp_dlylstRepository) : base(apqp_dlylstRepository)
    {
    _apqp_dlylstRepository = apqp_dlylstRepository;
    }
    public override void Initialization(apqp_dlylst model)
    {
    BaseInitialization(model);
    }
    public override async Task<apqp_dlylst> SaveAsync(apqp_dlylst model)
    {
    try
    {
    if (model.APQP_DLYLST_IDX > 0)
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
    public virtual async Task<apqp_dlylst> Sync(apqp_dlylst model)
    {
    return model;
    }
    }
    }

