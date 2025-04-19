namespace MESService.Implement
{
    public class tmbrcdService : BaseService<tmbrcd, ItmbrcdRepository>
    , ItmbrcdService
    {
    private readonly ItmbrcdRepository _tmbrcdRepository;
    public tmbrcdService(ItmbrcdRepository tmbrcdRepository) : base(tmbrcdRepository)
    {
    _tmbrcdRepository = tmbrcdRepository;
    }
    public override void Initialization(tmbrcd model)
    {
    BaseInitialization(model);
    }
    public override async Task<tmbrcd> SaveAsync(tmbrcd model)
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
    public virtual async Task<tmbrcd> Sync(tmbrcd model)
    {
    return model;
    }
    }
    }

