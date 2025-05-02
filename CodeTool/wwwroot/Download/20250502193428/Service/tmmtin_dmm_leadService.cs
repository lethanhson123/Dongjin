namespace MESService.Implement
{
    public class tmmtin_dmm_leadService : BaseService<tmmtin_dmm_lead, Itmmtin_dmm_leadRepository>
    , Itmmtin_dmm_leadService
    {
    private readonly Itmmtin_dmm_leadRepository _tmmtin_dmm_leadRepository;
    public tmmtin_dmm_leadService(Itmmtin_dmm_leadRepository tmmtin_dmm_leadRepository) : base(tmmtin_dmm_leadRepository)
    {
    _tmmtin_dmm_leadRepository = tmmtin_dmm_leadRepository;
    }
    public override void Initialization(tmmtin_dmm_lead model)
    {
    BaseInitialization(model);
    }
    public override async Task<tmmtin_dmm_lead> SaveAsync(tmmtin_dmm_lead model)
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
    public virtual async Task<tmmtin_dmm_lead> Sync(tmmtin_dmm_lead model)
    {
    return model;
    }
    }
    }

