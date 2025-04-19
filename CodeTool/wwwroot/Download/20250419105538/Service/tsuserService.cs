namespace MESService.Implement
{
    public class tsuserService : BaseService<tsuser, ItsuserRepository>
    , ItsuserService
    {
    private readonly ItsuserRepository _tsuserRepository;
    public tsuserService(ItsuserRepository tsuserRepository) : base(tsuserRepository)
    {
    _tsuserRepository = tsuserRepository;
    }
    public override void Initialization(tsuser model)
    {
    BaseInitialization(model);
    }
    public override async Task<tsuser> SaveAsync(tsuser model)
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
    public virtual async Task<tsuser> Sync(tsuser model)
    {
    return model;
    }
    }
    }

