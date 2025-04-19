namespace MESService.Implement
{
    public class kr_inspctn_stService : BaseService<kr_inspctn_st, Ikr_inspctn_stRepository>
    , Ikr_inspctn_stService
    {
    private readonly Ikr_inspctn_stRepository _kr_inspctn_stRepository;
    public kr_inspctn_stService(Ikr_inspctn_stRepository kr_inspctn_stRepository) : base(kr_inspctn_stRepository)
    {
    _kr_inspctn_stRepository = kr_inspctn_stRepository;
    }
    public override void Initialization(kr_inspctn_st model)
    {
    BaseInitialization(model);
    }
    public override async Task<kr_inspctn_st> SaveAsync(kr_inspctn_st model)
    {
    try
    {
    if (model.KR_INSPCTN_IDX > 0)
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
    public virtual async Task<kr_inspctn_st> Sync(kr_inspctn_st model)
    {
    return model;
    }
    }
    }

