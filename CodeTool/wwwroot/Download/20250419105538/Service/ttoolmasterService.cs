namespace MESService.Implement
{
    public class ttoolmasterService : BaseService<ttoolmaster, IttoolmasterRepository>
    , IttoolmasterService
    {
    private readonly IttoolmasterRepository _ttoolmasterRepository;
    public ttoolmasterService(IttoolmasterRepository ttoolmasterRepository) : base(ttoolmasterRepository)
    {
    _ttoolmasterRepository = ttoolmasterRepository;
    }
    public override void Initialization(ttoolmaster model)
    {
    BaseInitialization(model);
    }
    public override async Task<ttoolmaster> SaveAsync(ttoolmaster model)
    {
    try
    {
    if (model.TOOL_IDX > 0)
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
    public virtual async Task<ttoolmaster> Sync(ttoolmaster model)
    {
    return model;
    }
    }
    }

