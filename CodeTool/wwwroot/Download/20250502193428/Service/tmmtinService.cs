namespace MESService.Implement
{
    public class tmmtinService : BaseService<tmmtin, ItmmtinRepository>
    , ItmmtinService
    {
    private readonly ItmmtinRepository _tmmtinRepository;
    public tmmtinService(ItmmtinRepository tmmtinRepository) : base(tmmtinRepository)
    {
    _tmmtinRepository = tmmtinRepository;
    }
    public override void Initialization(tmmtin model)
    {
    BaseInitialization(model);
    }
    public override async Task<tmmtin> SaveAsync(tmmtin model)
    {
    try
    {
    if (model.MTIN_IDX > 0)
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
    public virtual async Task<tmmtin> Sync(tmmtin model)
    {
    return model;
    }
    }
    }

