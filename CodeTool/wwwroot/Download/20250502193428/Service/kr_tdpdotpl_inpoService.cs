namespace MESService.Implement
{
    public class kr_tdpdotpl_inpoService : BaseService<kr_tdpdotpl_inpo, Ikr_tdpdotpl_inpoRepository>
    , Ikr_tdpdotpl_inpoService
    {
    private readonly Ikr_tdpdotpl_inpoRepository _kr_tdpdotpl_inpoRepository;
    public kr_tdpdotpl_inpoService(Ikr_tdpdotpl_inpoRepository kr_tdpdotpl_inpoRepository) : base(kr_tdpdotpl_inpoRepository)
    {
    _kr_tdpdotpl_inpoRepository = kr_tdpdotpl_inpoRepository;
    }
    public override void Initialization(kr_tdpdotpl_inpo model)
    {
    BaseInitialization(model);
    }
    public override async Task<kr_tdpdotpl_inpo> SaveAsync(kr_tdpdotpl_inpo model)
    {
    try
    {
    if (model.PDOTPL_INPO_IDX > 0)
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
    public virtual async Task<kr_tdpdotpl_inpo> Sync(kr_tdpdotpl_inpo model)
    {
    return model;
    }
    }
    }

