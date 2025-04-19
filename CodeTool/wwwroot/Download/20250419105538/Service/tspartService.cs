namespace MESService.Implement
{
    public class tspartService : BaseService<tspart, ItspartRepository>
    , ItspartService
    {
    private readonly ItspartRepository _tspartRepository;
    public tspartService(ItspartRepository tspartRepository) : base(tspartRepository)
    {
    _tspartRepository = tspartRepository;
    }
    public override void Initialization(tspart model)
    {
    BaseInitialization(model);
    }
    public override async Task<tspart> SaveAsync(tspart model)
    {
    try
    {
    if (model.PART_IDX > 0)
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
    public virtual async Task<tspart> Sync(tspart model)
    {
    return model;
    }
    }
    }

