namespace MESService.Implement
{
    public class tiivaj_leadService : BaseService<tiivaj_lead, Itiivaj_leadRepository>
    , Itiivaj_leadService
    {
    private readonly Itiivaj_leadRepository _tiivaj_leadRepository;
    public tiivaj_leadService(Itiivaj_leadRepository tiivaj_leadRepository) : base(tiivaj_leadRepository)
    {
    _tiivaj_leadRepository = tiivaj_leadRepository;
    }
    public override void Initialization(tiivaj_lead model)
    {
    BaseInitialization(model);
    }
    public override async Task<tiivaj_lead> SaveAsync(tiivaj_lead model)
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
    public virtual async Task<tiivaj_lead> Sync(tiivaj_lead model)
    {
    return model;
    }
    }
    }

