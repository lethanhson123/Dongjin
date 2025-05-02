namespace MESService.Implement
{
    public class pdpart_addlistService : BaseService<pdpart_addlist, Ipdpart_addlistRepository>
    , Ipdpart_addlistService
    {
    private readonly Ipdpart_addlistRepository _pdpart_addlistRepository;
    public pdpart_addlistService(Ipdpart_addlistRepository pdpart_addlistRepository) : base(pdpart_addlistRepository)
    {
    _pdpart_addlistRepository = pdpart_addlistRepository;
    }
    public override void Initialization(pdpart_addlist model)
    {
    BaseInitialization(model);
    }
    public override async Task<pdpart_addlist> SaveAsync(pdpart_addlist model)
    {
    try
    {
    if (model.PDPART_AL_IDX > 0)
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
    public virtual async Task<pdpart_addlist> Sync(pdpart_addlist model)
    {
    return model;
    }
    }
    }

