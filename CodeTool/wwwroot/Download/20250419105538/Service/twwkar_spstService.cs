namespace MESService.Implement
{
    public class twwkar_spstService : BaseService<twwkar_spst, Itwwkar_spstRepository>
    , Itwwkar_spstService
    {
    private readonly Itwwkar_spstRepository _twwkar_spstRepository;
    public twwkar_spstService(Itwwkar_spstRepository twwkar_spstRepository) : base(twwkar_spstRepository)
    {
    _twwkar_spstRepository = twwkar_spstRepository;
    }
    public override void Initialization(twwkar_spst model)
    {
    BaseInitialization(model);
    }
    public override async Task<twwkar_spst> SaveAsync(twwkar_spst model)
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
    public virtual async Task<twwkar_spst> Sync(twwkar_spst model)
    {
    return model;
    }
    }
    }

