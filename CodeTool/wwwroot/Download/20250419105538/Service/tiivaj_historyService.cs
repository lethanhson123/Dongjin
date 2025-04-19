namespace MESService.Implement
{
    public class tiivaj_historyService : BaseService<tiivaj_history, Itiivaj_historyRepository>
    , Itiivaj_historyService
    {
    private readonly Itiivaj_historyRepository _tiivaj_historyRepository;
    public tiivaj_historyService(Itiivaj_historyRepository tiivaj_historyRepository) : base(tiivaj_historyRepository)
    {
    _tiivaj_historyRepository = tiivaj_historyRepository;
    }
    public override void Initialization(tiivaj_history model)
    {
    BaseInitialization(model);
    }
    public override async Task<tiivaj_history> SaveAsync(tiivaj_history model)
    {
    try
    {
    if (model.IVAJ_IDX > 0)
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
    public virtual async Task<tiivaj_history> Sync(tiivaj_history model)
    {
    return model;
    }
    }
    }

