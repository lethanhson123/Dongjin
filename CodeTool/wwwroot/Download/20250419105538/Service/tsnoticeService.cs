namespace MESService.Implement
{
    public class tsnoticeService : BaseService<tsnotice, ItsnoticeRepository>
    , ItsnoticeService
    {
    private readonly ItsnoticeRepository _tsnoticeRepository;
    public tsnoticeService(ItsnoticeRepository tsnoticeRepository) : base(tsnoticeRepository)
    {
    _tsnoticeRepository = tsnoticeRepository;
    }
    public override void Initialization(tsnotice model)
    {
    BaseInitialization(model);
    }
    public override async Task<tsnotice> SaveAsync(tsnotice model)
    {
    try
    {
    if (model.Notice_IDX > 0)
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
    public virtual async Task<tsnotice> Sync(tsnotice model)
    {
    return model;
    }
    }
    }

