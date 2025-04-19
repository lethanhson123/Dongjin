namespace MESService.Implement
{
    public class kr_tiivtrService : BaseService<kr_tiivtr, Ikr_tiivtrRepository>
    , Ikr_tiivtrService
    {
    private readonly Ikr_tiivtrRepository _kr_tiivtrRepository;
    public kr_tiivtrService(Ikr_tiivtrRepository kr_tiivtrRepository) : base(kr_tiivtrRepository)
    {
    _kr_tiivtrRepository = kr_tiivtrRepository;
    }
    public override void Initialization(kr_tiivtr model)
    {
    BaseInitialization(model);
    }
    public override async Task<kr_tiivtr> SaveAsync(kr_tiivtr model)
    {
    try
    {
    if (model.IV_IDX > 0)
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
    public virtual async Task<kr_tiivtr> Sync(kr_tiivtr model)
    {
    return model;
    }
    }
    }

