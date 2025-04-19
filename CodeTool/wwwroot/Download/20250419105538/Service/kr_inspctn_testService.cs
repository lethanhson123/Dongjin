namespace MESService.Implement
{
    public class kr_inspctn_testService : BaseService<kr_inspctn_test, Ikr_inspctn_testRepository>
    , Ikr_inspctn_testService
    {
    private readonly Ikr_inspctn_testRepository _kr_inspctn_testRepository;
    public kr_inspctn_testService(Ikr_inspctn_testRepository kr_inspctn_testRepository) : base(kr_inspctn_testRepository)
    {
    _kr_inspctn_testRepository = kr_inspctn_testRepository;
    }
    public override void Initialization(kr_inspctn_test model)
    {
    BaseInitialization(model);
    }
    public override async Task<kr_inspctn_test> SaveAsync(kr_inspctn_test model)
    {
    try
    {
    if (model.KR_INSPCTN_TEST_IDX > 0)
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
    public virtual async Task<kr_inspctn_test> Sync(kr_inspctn_test model)
    {
    return model;
    }
    }
    }

