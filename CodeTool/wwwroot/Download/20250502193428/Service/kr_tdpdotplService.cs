namespace MESService.Implement
{
    public class kr_tdpdotplService : BaseService<kr_tdpdotpl, Ikr_tdpdotplRepository>
    , Ikr_tdpdotplService
    {
    private readonly Ikr_tdpdotplRepository _kr_tdpdotplRepository;
    public kr_tdpdotplService(Ikr_tdpdotplRepository kr_tdpdotplRepository) : base(kr_tdpdotplRepository)
    {
    _kr_tdpdotplRepository = kr_tdpdotplRepository;
    }
    public override void Initialization(kr_tdpdotpl model)
    {
    BaseInitialization(model);
    }
    public override async Task<kr_tdpdotpl> SaveAsync(kr_tdpdotpl model)
    {
    try
    {
    if (model.PDOTPL_IDX > 0)
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
    public virtual async Task<kr_tdpdotpl> Sync(kr_tdpdotpl model)
    {
    return model;
    }
    }
    }

