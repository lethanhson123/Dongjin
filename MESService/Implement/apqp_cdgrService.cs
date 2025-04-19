namespace MESService.Implement
{
    public class apqp_cdgrService : BaseService<apqp_cdgr, Iapqp_cdgrRepository>
    , Iapqp_cdgrService
    {
    private readonly Iapqp_cdgrRepository _apqp_cdgrRepository;
    public apqp_cdgrService(Iapqp_cdgrRepository apqp_cdgrRepository) : base(apqp_cdgrRepository)
    {
    _apqp_cdgrRepository = apqp_cdgrRepository;
    }
    public override void Initialization(apqp_cdgr model)
    {
    BaseInitialization(model);
    }
    public override async Task<apqp_cdgr> SaveAsync(apqp_cdgr model)
    {
    try
    {
    if (model.CDGR_IDX > 0)
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
    public virtual async Task<apqp_cdgr> Sync(apqp_cdgr model)
    {
    return model;
    }
    }
    }

