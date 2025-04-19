namespace MESService.Implement
{
    public class kr_tdd_poplanService : BaseService<kr_tdd_poplan, Ikr_tdd_poplanRepository>
    , Ikr_tdd_poplanService
    {
    private readonly Ikr_tdd_poplanRepository _kr_tdd_poplanRepository;
    public kr_tdd_poplanService(Ikr_tdd_poplanRepository kr_tdd_poplanRepository) : base(kr_tdd_poplanRepository)
    {
    _kr_tdd_poplanRepository = kr_tdd_poplanRepository;
    }
    public override void Initialization(kr_tdd_poplan model)
    {
    BaseInitialization(model);
    }
    public override async Task<kr_tdd_poplan> SaveAsync(kr_tdd_poplan model)
    {
    try
    {
    if (model.TDD_PP_IDX > 0)
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
    public virtual async Task<kr_tdd_poplan> Sync(kr_tdd_poplan model)
    {
    return model;
    }
    }
    }

