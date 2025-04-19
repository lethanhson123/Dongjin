namespace MESService.Implement
{
    public class tiivtr_historyService : BaseService<tiivtr_history, Itiivtr_historyRepository>
    , Itiivtr_historyService
    {
    private readonly Itiivtr_historyRepository _tiivtr_historyRepository;
    public tiivtr_historyService(Itiivtr_historyRepository tiivtr_historyRepository) : base(tiivtr_historyRepository)
    {
    _tiivtr_historyRepository = tiivtr_historyRepository;
    }
    public override void Initialization(tiivtr_history model)
    {
    BaseInitialization(model);
    }
    public override async Task<tiivtr_history> SaveAsync(tiivtr_history model)
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
    public virtual async Task<tiivtr_history> Sync(tiivtr_history model)
    {
    return model;
    }
    }
    }

