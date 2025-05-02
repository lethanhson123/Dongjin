namespace MESService.Implement
{
    public class tdd_poplanService : BaseService<tdd_poplan, Itdd_poplanRepository>
    , Itdd_poplanService
    {
    private readonly Itdd_poplanRepository _tdd_poplanRepository;
    public tdd_poplanService(Itdd_poplanRepository tdd_poplanRepository) : base(tdd_poplanRepository)
    {
    _tdd_poplanRepository = tdd_poplanRepository;
    }
    public override void Initialization(tdd_poplan model)
    {
    BaseInitialization(model);
    }
    public override async Task<tdd_poplan> SaveAsync(tdd_poplan model)
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
    public virtual async Task<tdd_poplan> Sync(tdd_poplan model)
    {
    return model;
    }
    }
    }

