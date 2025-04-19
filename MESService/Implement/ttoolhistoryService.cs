namespace MESService.Implement
{
    public class ttoolhistoryService : BaseService<ttoolhistory, IttoolhistoryRepository>
    , IttoolhistoryService
    {
    private readonly IttoolhistoryRepository _ttoolhistoryRepository;
    public ttoolhistoryService(IttoolhistoryRepository ttoolhistoryRepository) : base(ttoolhistoryRepository)
    {
    _ttoolhistoryRepository = ttoolhistoryRepository;
    }
    public override void Initialization(ttoolhistory model)
    {
    BaseInitialization(model);
    }
    public override async Task<ttoolhistory> SaveAsync(ttoolhistory model)
    {
    try
    {
    if (model.TOOL_HIS_IDX > 0)
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
    public virtual async Task<ttoolhistory> Sync(ttoolhistory model)
    {
    return model;
    }
    }
    }

