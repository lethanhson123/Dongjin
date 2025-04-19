namespace MESService.Implement
{
    public class pdpartService : BaseService<pdpart, IpdpartRepository>
    , IpdpartService
    {
    private readonly IpdpartRepository _pdpartRepository;
    public pdpartService(IpdpartRepository pdpartRepository) : base(pdpartRepository)
    {
    _pdpartRepository = pdpartRepository;
    }
    public override void Initialization(pdpart model)
    {
    BaseInitialization(model);
    }
    public override async Task<pdpart> SaveAsync(pdpart model)
    {
    try
    {
    if (model.PDPART_IDX > 0)
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
    public virtual async Task<pdpart> Sync(pdpart model)
    {
    return model;
    }
    }
    }

