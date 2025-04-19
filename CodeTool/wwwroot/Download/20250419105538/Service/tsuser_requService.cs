namespace MESService.Implement
{
    public class tsuser_requService : BaseService<tsuser_requ, Itsuser_requRepository>
    , Itsuser_requService
    {
    private readonly Itsuser_requRepository _tsuser_requRepository;
    public tsuser_requService(Itsuser_requRepository tsuser_requRepository) : base(tsuser_requRepository)
    {
    _tsuser_requRepository = tsuser_requRepository;
    }
    public override void Initialization(tsuser_requ model)
    {
    BaseInitialization(model);
    }
    public override async Task<tsuser_requ> SaveAsync(tsuser_requ model)
    {
    try
    {
    if (model.REQU_IDX > 0)
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
    public virtual async Task<tsuser_requ> Sync(tsuser_requ model)
    {
    return model;
    }
    }
    }

