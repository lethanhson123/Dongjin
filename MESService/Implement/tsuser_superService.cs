namespace MESService.Implement
{
    public class tsuser_superService : BaseService<tsuser_super, Itsuser_superRepository>
    , Itsuser_superService
    {
    private readonly Itsuser_superRepository _tsuser_superRepository;
    public tsuser_superService(Itsuser_superRepository tsuser_superRepository) : base(tsuser_superRepository)
    {
    _tsuser_superRepository = tsuser_superRepository;
    }
    public override void Initialization(tsuser_super model)
    {
    BaseInitialization(model);
    }
    public override async Task<tsuser_super> SaveAsync(tsuser_super model)
    {
    try
    {
    if (model.USER_IDX > 0)
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
    public virtual async Task<tsuser_super> Sync(tsuser_super model)
    {
    return model;
    }
    }
    }

