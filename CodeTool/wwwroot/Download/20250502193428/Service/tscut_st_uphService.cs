namespace MESService.Implement
{
    public class tscut_st_uphService : BaseService<tscut_st_uph, Itscut_st_uphRepository>
    , Itscut_st_uphService
    {
    private readonly Itscut_st_uphRepository _tscut_st_uphRepository;
    public tscut_st_uphService(Itscut_st_uphRepository tscut_st_uphRepository) : base(tscut_st_uphRepository)
    {
    _tscut_st_uphRepository = tscut_st_uphRepository;
    }
    public override void Initialization(tscut_st_uph model)
    {
    BaseInitialization(model);
    }
    public override async Task<tscut_st_uph> SaveAsync(tscut_st_uph model)
    {
    try
    {
    if (model.TSCUT_ST_UPH_IDX > 0)
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
    public virtual async Task<tscut_st_uph> Sync(tscut_st_uph model)
    {
    return model;
    }
    }
    }

