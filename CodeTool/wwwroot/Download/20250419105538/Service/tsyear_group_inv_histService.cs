namespace MESService.Implement
{
    public class tsyear_group_inv_histService : BaseService<tsyear_group_inv_hist, Itsyear_group_inv_histRepository>
    , Itsyear_group_inv_histService
    {
    private readonly Itsyear_group_inv_histRepository _tsyear_group_inv_histRepository;
    public tsyear_group_inv_histService(Itsyear_group_inv_histRepository tsyear_group_inv_histRepository) : base(tsyear_group_inv_histRepository)
    {
    _tsyear_group_inv_histRepository = tsyear_group_inv_histRepository;
    }
    public override void Initialization(tsyear_group_inv_hist model)
    {
    BaseInitialization(model);
    }
    public override async Task<tsyear_group_inv_hist> SaveAsync(tsyear_group_inv_hist model)
    {
    try
    {
    if (model.TSYEAR_GROUP_IDX > 0)
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
    public virtual async Task<tsyear_group_inv_hist> Sync(tsyear_group_inv_hist model)
    {
    return model;
    }
    }
    }

