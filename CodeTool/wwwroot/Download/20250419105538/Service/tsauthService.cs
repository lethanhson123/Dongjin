namespace MESService.Implement
{
    public class tsauthService : BaseService<tsauth, ItsauthRepository>
    , ItsauthService
    {
    private readonly ItsauthRepository _tsauthRepository;
    public tsauthService(ItsauthRepository tsauthRepository) : base(tsauthRepository)
    {
    _tsauthRepository = tsauthRepository;
    }
    public override void Initialization(tsauth model)
    {
    BaseInitialization(model);
    }
    public override async Task<tsauth> SaveAsync(tsauth model)
    {
    try
    {
    if (model.AUTH_IDX > 0)
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
    public virtual async Task<tsauth> Sync(tsauth model)
    {
    return model;
    }
    }
    }

