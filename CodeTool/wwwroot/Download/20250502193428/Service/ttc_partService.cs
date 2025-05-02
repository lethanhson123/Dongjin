namespace MESService.Implement
{
    public class ttc_partService : BaseService<ttc_part, Ittc_partRepository>
    , Ittc_partService
    {
    private readonly Ittc_partRepository _ttc_partRepository;
    public ttc_partService(Ittc_partRepository ttc_partRepository) : base(ttc_partRepository)
    {
    _ttc_partRepository = ttc_partRepository;
    }
    public override void Initialization(ttc_part model)
    {
    BaseInitialization(model);
    }
    public override async Task<ttc_part> SaveAsync(ttc_part model)
    {
    try
    {
    if (model.TTC_PART_IDX > 0)
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
    public virtual async Task<ttc_part> Sync(ttc_part model)
    {
    return model;
    }
    }
    }

