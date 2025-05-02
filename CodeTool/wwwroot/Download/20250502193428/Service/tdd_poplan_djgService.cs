namespace MESService.Implement
{
    public class tdd_poplan_djgService : BaseService<tdd_poplan_djg, Itdd_poplan_djgRepository>
    , Itdd_poplan_djgService
    {
    private readonly Itdd_poplan_djgRepository _tdd_poplan_djgRepository;
    public tdd_poplan_djgService(Itdd_poplan_djgRepository tdd_poplan_djgRepository) : base(tdd_poplan_djgRepository)
    {
    _tdd_poplan_djgRepository = tdd_poplan_djgRepository;
    }
    public override void Initialization(tdd_poplan_djg model)
    {
    BaseInitialization(model);
    }
    public override async Task<tdd_poplan_djg> SaveAsync(tdd_poplan_djg model)
    {
    try
    {
    if (model.TDD_PPD_IDX > 0)
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
    public virtual async Task<tdd_poplan_djg> Sync(tdd_poplan_djg model)
    {
    return model;
    }
    }
    }

