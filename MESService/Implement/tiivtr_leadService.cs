namespace MESService.Implement
{
    public class tiivtr_leadService : BaseService<tiivtr_lead, Itiivtr_leadRepository>
    , Itiivtr_leadService
    {
    private readonly Itiivtr_leadRepository _tiivtr_leadRepository;
    public tiivtr_leadService(Itiivtr_leadRepository tiivtr_leadRepository) : base(tiivtr_leadRepository)
    {
    _tiivtr_leadRepository = tiivtr_leadRepository;
    }
    public override void Initialization(tiivtr_lead model)
    {
    BaseInitialization(model);
    }
    public override async Task<tiivtr_lead> SaveAsync(tiivtr_lead model)
    {
    try
    {
    if (model.IV_IDX > 0)
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
    public virtual async Task<tiivtr_lead> Sync(tiivtr_lead model)
    {
    return model;
    }
    }
    }

