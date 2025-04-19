namespace MESService.Implement
{
    public class twwkarService : BaseService<twwkar, ItwwkarRepository>
    , ItwwkarService
    {
    private readonly ItwwkarRepository _twwkarRepository;
    public twwkarService(ItwwkarRepository twwkarRepository) : base(twwkarRepository)
    {
    _twwkarRepository = twwkarRepository;
    }
    public override void Initialization(twwkar model)
    {
    BaseInitialization(model);
    }
    public override async Task<twwkar> SaveAsync(twwkar model)
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
    public virtual async Task<twwkar> Sync(twwkar model)
    {
    return model;
    }
    }
    }

