namespace MESService.Implement
{
    public class tsurauService : BaseService<tsurau, ItsurauRepository>
    , ItsurauService
    {
    private readonly ItsurauRepository _tsurauRepository;
    public tsurauService(ItsurauRepository tsurauRepository) : base(tsurauRepository)
    {
    _tsurauRepository = tsurauRepository;
    }
    public override void Initialization(tsurau model)
    {
    BaseInitialization(model);
    }
    public override async Task<tsurau> SaveAsync(tsurau model)
    {
    try
    {
    if (model.USER_AUTH_IDX > 0)
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
    public virtual async Task<tsurau> Sync(tsurau model)
    {
    return model;
    }
    }
    }

