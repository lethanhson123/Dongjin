namespace MESService.Implement
{
    public class ttc_rackmtinService : BaseService<ttc_rackmtin, Ittc_rackmtinRepository>
    , Ittc_rackmtinService
    {
    private readonly Ittc_rackmtinRepository _ttc_rackmtinRepository;
    public ttc_rackmtinService(Ittc_rackmtinRepository ttc_rackmtinRepository) : base(ttc_rackmtinRepository)
    {
    _ttc_rackmtinRepository = ttc_rackmtinRepository;
    }
    public override void Initialization(ttc_rackmtin model)
    {
    BaseInitialization(model);
    }
    public override async Task<ttc_rackmtin> SaveAsync(ttc_rackmtin model)
    {
    try
    {
    if (model.TRACK_IDX > 0)
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
    public virtual async Task<ttc_rackmtin> Sync(ttc_rackmtin model)
    {
    return model;
    }
    }
    }

