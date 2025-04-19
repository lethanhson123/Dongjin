namespace MESService.Implement
{
    public class trackmtim_lt_inspService : BaseService<trackmtim_lt_insp, Itrackmtim_lt_inspRepository>
    , Itrackmtim_lt_inspService
    {
    private readonly Itrackmtim_lt_inspRepository _trackmtim_lt_inspRepository;
    public trackmtim_lt_inspService(Itrackmtim_lt_inspRepository trackmtim_lt_inspRepository) : base(trackmtim_lt_inspRepository)
    {
    _trackmtim_lt_inspRepository = trackmtim_lt_inspRepository;
    }
    public override void Initialization(trackmtim_lt_insp model)
    {
    BaseInitialization(model);
    }
    public override async Task<trackmtim_lt_insp> SaveAsync(trackmtim_lt_insp model)
    {
    try
    {
    if (model.LT_INSP_IDX > 0)
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
    public virtual async Task<trackmtim_lt_insp> Sync(trackmtim_lt_insp model)
    {
    return model;
    }
    }
    }

