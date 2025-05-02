namespace MESService.Implement
{
    public class tworkresultService : BaseService<tworkresult, ItworkresultRepository>
    , ItworkresultService
    {
    private readonly ItworkresultRepository _tworkresultRepository;
    public tworkresultService(ItworkresultRepository tworkresultRepository) : base(tworkresultRepository)
    {
    _tworkresultRepository = tworkresultRepository;
    }
    public override void Initialization(tworkresult model)
    {
    BaseInitialization(model);
    }
    public override async Task<tworkresult> SaveAsync(tworkresult model)
    {
    try
    {
    if (model.WORK_IDX > 0)
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
    public virtual async Task<tworkresult> Sync(tworkresult model)
    {
    return model;
    }
    }
    }

