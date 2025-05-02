namespace MESService.Implement
{
    public class tdd_ct_stService : BaseService<tdd_ct_st, Itdd_ct_stRepository>
    , Itdd_ct_stService
    {
    private readonly Itdd_ct_stRepository _tdd_ct_stRepository;
    public tdd_ct_stService(Itdd_ct_stRepository tdd_ct_stRepository) : base(tdd_ct_stRepository)
    {
    _tdd_ct_stRepository = tdd_ct_stRepository;
    }
    public override void Initialization(tdd_ct_st model)
    {
    BaseInitialization(model);
    }
    public override async Task<tdd_ct_st> SaveAsync(tdd_ct_st model)
    {
    try
    {
    if (model.TDD_CT_IDX > 0)
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
    public virtual async Task<tdd_ct_st> Sync(tdd_ct_st model)
    {
    return model;
    }
    }
    }

