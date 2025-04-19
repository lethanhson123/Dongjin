namespace MESService.Implement
{
    public class tmbrcd_hisService : BaseService<tmbrcd_his, Itmbrcd_hisRepository>
    , Itmbrcd_hisService
    {
    private readonly Itmbrcd_hisRepository _tmbrcd_hisRepository;
    public tmbrcd_hisService(Itmbrcd_hisRepository tmbrcd_hisRepository) : base(tmbrcd_hisRepository)
    {
    _tmbrcd_hisRepository = tmbrcd_hisRepository;
    }
    public override void Initialization(tmbrcd_his model)
    {
    BaseInitialization(model);
    }
    public override async Task<tmbrcd_his> SaveAsync(tmbrcd_his model)
    {
    try
    {
    if (model.BARCD_IDX > 0)
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
    public virtual async Task<tmbrcd_his> Sync(tmbrcd_his model)
    {
    return model;
    }
    }
    }

