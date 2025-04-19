namespace MESService.Implement
{
    public class aatableService : BaseService<aatable, IaatableRepository>
    , IaatableService
    {
    private readonly IaatableRepository _aatableRepository;
    public aatableService(IaatableRepository aatableRepository) : base(aatableRepository)
    {
    _aatableRepository = aatableRepository;
    }
    public override void Initialization(aatable model)
    {
    BaseInitialization(model);
    }
    public override async Task<aatable> SaveAsync(aatable model)
    {
    try
    {
    if (model.ID > 0)
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
    public virtual async Task<aatable> Sync(aatable model)
    {
    return model;
    }
    }
    }

