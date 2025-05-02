namespace MESService.Implement
{
    public class pdcdnmService : BaseService<pdcdnm, IpdcdnmRepository>
    , IpdcdnmService
    {
    private readonly IpdcdnmRepository _pdcdnmRepository;
    public pdcdnmService(IpdcdnmRepository pdcdnmRepository) : base(pdcdnmRepository)
    {
    _pdcdnmRepository = pdcdnmRepository;
    }
    public override void Initialization(pdcdnm model)
    {
    BaseInitialization(model);
    }
    public override async Task<pdcdnm> SaveAsync(pdcdnm model)
    {
    try
    {
    if (model.CD_IDX > 0)
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
    public virtual async Task<pdcdnm> Sync(pdcdnm model)
    {
    return model;
    }
    }
    }

