namespace MESService.Implement
{
    public class tmmtin_dmm_appService : BaseService<tmmtin_dmm_app, Itmmtin_dmm_appRepository>
    , Itmmtin_dmm_appService
    {
    private readonly Itmmtin_dmm_appRepository _tmmtin_dmm_appRepository;
    public tmmtin_dmm_appService(Itmmtin_dmm_appRepository tmmtin_dmm_appRepository) : base(tmmtin_dmm_appRepository)
    {
    _tmmtin_dmm_appRepository = tmmtin_dmm_appRepository;
    }
    public override void Initialization(tmmtin_dmm_app model)
    {
    BaseInitialization(model);
    }
    public override async Task<tmmtin_dmm_app> SaveAsync(tmmtin_dmm_app model)
    {
    try
    {
    if (model.TMMTIN_DMM_IDX > 0)
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
    public virtual async Task<tmmtin_dmm_app> Sync(tmmtin_dmm_app model)
    {
    return model;
    }
    }
    }

