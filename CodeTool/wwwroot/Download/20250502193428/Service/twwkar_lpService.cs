namespace MESService.Implement
{
    public class twwkar_lpService : BaseService<twwkar_lp, Itwwkar_lpRepository>
    , Itwwkar_lpService
    {
    private readonly Itwwkar_lpRepository _twwkar_lpRepository;
    public twwkar_lpService(Itwwkar_lpRepository twwkar_lpRepository) : base(twwkar_lpRepository)
    {
    _twwkar_lpRepository = twwkar_lpRepository;
    }
    public override void Initialization(twwkar_lp model)
    {
    BaseInitialization(model);
    }
    public override async Task<twwkar_lp> SaveAsync(twwkar_lp model)
    {
    try
    {
    if (model.WK_IDX > 0)
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
    public virtual async Task<twwkar_lp> Sync(twwkar_lp model)
    {
    return model;
    }
    }
    }

