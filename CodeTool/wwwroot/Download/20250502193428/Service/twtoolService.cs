namespace MESService.Implement
{
    public class twtoolService : BaseService<twtool, ItwtoolRepository>
    , ItwtoolService
    {
    private readonly ItwtoolRepository _twtoolRepository;
    public twtoolService(ItwtoolRepository twtoolRepository) : base(twtoolRepository)
    {
    _twtoolRepository = twtoolRepository;
    }
    public override void Initialization(twtool model)
    {
    BaseInitialization(model);
    }
    public override async Task<twtool> SaveAsync(twtool model)
    {
    try
    {
    if (model.TOOLWORK_IDX > 0)
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
    public virtual async Task<twtool> Sync(twtool model)
    {
    return model;
    }
    }
    }

