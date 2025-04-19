namespace MESService.Implement
{
    public class torderlist_wtimeService : BaseService<torderlist_wtime, Itorderlist_wtimeRepository>
    , Itorderlist_wtimeService
    {
    private readonly Itorderlist_wtimeRepository _torderlist_wtimeRepository;
    public torderlist_wtimeService(Itorderlist_wtimeRepository torderlist_wtimeRepository) : base(torderlist_wtimeRepository)
    {
    _torderlist_wtimeRepository = torderlist_wtimeRepository;
    }
    public override void Initialization(torderlist_wtime model)
    {
    BaseInitialization(model);
    }
    public override async Task<torderlist_wtime> SaveAsync(torderlist_wtime model)
    {
    try
    {
    if (model.TOWT_INDX > 0)
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
    public virtual async Task<torderlist_wtime> Sync(torderlist_wtime model)
    {
    return model;
    }
    }
    }

