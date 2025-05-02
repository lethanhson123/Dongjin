namespace MESService.Implement
{
    public class tsmnauService : BaseService<tsmnau, ItsmnauRepository>
    , ItsmnauService
    {
    private readonly ItsmnauRepository _tsmnauRepository;
    public tsmnauService(ItsmnauRepository tsmnauRepository) : base(tsmnauRepository)
    {
    _tsmnauRepository = tsmnauRepository;
    }
    public override void Initialization(tsmnau model)
    {
    BaseInitialization(model);
    }
    public override async Task<tsmnau> SaveAsync(tsmnau model)
    {
    try
    {
    if (model.MENU_AUTH_IDX > 0)
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
    public virtual async Task<tsmnau> Sync(tsmnau model)
    {
    return model;
    }
    }
    }

