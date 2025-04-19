namespace MESService.Implement
{
    public class apqp_filelstService : BaseService<apqp_filelst, Iapqp_filelstRepository>
    , Iapqp_filelstService
    {
    private readonly Iapqp_filelstRepository _apqp_filelstRepository;
    public apqp_filelstService(Iapqp_filelstRepository apqp_filelstRepository) : base(apqp_filelstRepository)
    {
    _apqp_filelstRepository = apqp_filelstRepository;
    }
    public override void Initialization(apqp_filelst model)
    {
    BaseInitialization(model);
    }
    public override async Task<apqp_filelst> SaveAsync(apqp_filelst model)
    {
    try
    {
    if (model.APQP_FLLST_IDX > 0)
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
    public virtual async Task<apqp_filelst> Sync(apqp_filelst model)
    {
    return model;
    }
    }
    }

