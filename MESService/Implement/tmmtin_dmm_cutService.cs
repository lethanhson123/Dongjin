namespace MESService.Implement
{
    public class tmmtin_dmm_cutService : BaseService<tmmtin_dmm_cut, Itmmtin_dmm_cutRepository>
    , Itmmtin_dmm_cutService
    {
    private readonly Itmmtin_dmm_cutRepository _tmmtin_dmm_cutRepository;
    public tmmtin_dmm_cutService(Itmmtin_dmm_cutRepository tmmtin_dmm_cutRepository) : base(tmmtin_dmm_cutRepository)
    {
    _tmmtin_dmm_cutRepository = tmmtin_dmm_cutRepository;
    }
    public override void Initialization(tmmtin_dmm_cut model)
    {
    BaseInitialization(model);
    }
    public override async Task<tmmtin_dmm_cut> SaveAsync(tmmtin_dmm_cut model)
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
    public virtual async Task<tmmtin_dmm_cut> Sync(tmmtin_dmm_cut model)
    {
    return model;
    }
    }
    }

