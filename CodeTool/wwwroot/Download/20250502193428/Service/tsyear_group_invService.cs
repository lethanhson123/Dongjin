namespace MESService.Implement
{
    public class tsyear_group_invService : BaseService<tsyear_group_inv, Itsyear_group_invRepository>
    , Itsyear_group_invService
    {
    private readonly Itsyear_group_invRepository _tsyear_group_invRepository;
    public tsyear_group_invService(Itsyear_group_invRepository tsyear_group_invRepository) : base(tsyear_group_invRepository)
    {
    _tsyear_group_invRepository = tsyear_group_invRepository;
    }
    public override void Initialization(tsyear_group_inv model)
    {
    BaseInitialization(model);
    }
    public override async Task<tsyear_group_inv> SaveAsync(tsyear_group_inv model)
    {
    try
    {
    if (model.TSYEAR_GROUP_IDX > 0)
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
    public virtual async Task<tsyear_group_inv> Sync(tsyear_group_inv model)
    {
    return model;
    }
    }
    }

