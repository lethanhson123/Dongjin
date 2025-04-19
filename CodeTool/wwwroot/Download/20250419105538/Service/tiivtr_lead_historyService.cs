namespace MESService.Implement
{
    public class tiivtr_lead_historyService : BaseService<tiivtr_lead_history, Itiivtr_lead_historyRepository>
    , Itiivtr_lead_historyService
    {
    private readonly Itiivtr_lead_historyRepository _tiivtr_lead_historyRepository;
    public tiivtr_lead_historyService(Itiivtr_lead_historyRepository tiivtr_lead_historyRepository) : base(tiivtr_lead_historyRepository)
    {
    _tiivtr_lead_historyRepository = tiivtr_lead_historyRepository;
    }
    public override void Initialization(tiivtr_lead_history model)
    {
    BaseInitialization(model);
    }
    public override async Task<tiivtr_lead_history> SaveAsync(tiivtr_lead_history model)
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
    public virtual async Task<tiivtr_lead_history> Sync(tiivtr_lead_history model)
    {
    return model;
    }
    }
    }

