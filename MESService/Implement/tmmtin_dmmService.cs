namespace MESService.Implement
{
    public class tmmtin_dmmService : BaseService<tmmtin_dmm, Itmmtin_dmmRepository>
    , Itmmtin_dmmService
    {
    private readonly Itmmtin_dmmRepository _tmmtin_dmmRepository;
    public tmmtin_dmmService(Itmmtin_dmmRepository tmmtin_dmmRepository) : base(tmmtin_dmmRepository)
    {
    _tmmtin_dmmRepository = tmmtin_dmmRepository;
    }
    public override void Initialization(tmmtin_dmm model)
    {
    BaseInitialization(model);
    }
    public override async Task<tmmtin_dmm> SaveAsync(tmmtin_dmm model)
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
    public virtual async Task<tmmtin_dmm> Sync(tmmtin_dmm model)
    {
    return model;
    }
    }
    }

