namespace MESService.Implement
{
    public class tiivajService : BaseService<tiivaj, ItiivajRepository>
    , ItiivajService
    {
    private readonly ItiivajRepository _tiivajRepository;
    public tiivajService(ItiivajRepository tiivajRepository) : base(tiivajRepository)
    {
    _tiivajRepository = tiivajRepository;
    }
    public override void Initialization(tiivaj model)
    {
    BaseInitialization(model);
    }
    public override async Task<tiivaj> SaveAsync(tiivaj model)
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
    public virtual async Task<tiivaj> Sync(tiivaj model)
    {
    return model;
    }
    }
    }

