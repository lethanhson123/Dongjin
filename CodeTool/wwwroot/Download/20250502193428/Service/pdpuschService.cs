namespace MESService.Implement
{
    public class pdpuschService : BaseService<pdpusch, IpdpuschRepository>
    , IpdpuschService
    {
    private readonly IpdpuschRepository _pdpuschRepository;
    public pdpuschService(IpdpuschRepository pdpuschRepository) : base(pdpuschRepository)
    {
    _pdpuschRepository = pdpuschRepository;
    }
    public override void Initialization(pdpusch model)
    {
    BaseInitialization(model);
    }
    public override async Task<pdpusch> SaveAsync(pdpusch model)
    {
    try
    {
    if (model.PDPUSCH_IDX > 0)
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
    public virtual async Task<pdpusch> Sync(pdpusch model)
    {
    return model;
    }
    }
    }

