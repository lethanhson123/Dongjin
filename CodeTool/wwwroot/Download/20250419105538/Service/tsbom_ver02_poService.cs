namespace MESService.Implement
{
    public class tsbom_ver02_poService : BaseService<tsbom_ver02_po, Itsbom_ver02_poRepository>
    , Itsbom_ver02_poService
    {
    private readonly Itsbom_ver02_poRepository _tsbom_ver02_poRepository;
    public tsbom_ver02_poService(Itsbom_ver02_poRepository tsbom_ver02_poRepository) : base(tsbom_ver02_poRepository)
    {
    _tsbom_ver02_poRepository = tsbom_ver02_poRepository;
    }
    public override void Initialization(tsbom_ver02_po model)
    {
    BaseInitialization(model);
    }
    public override async Task<tsbom_ver02_po> SaveAsync(tsbom_ver02_po model)
    {
    try
    {
    if (model.BOM_IDX > 0)
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
    public virtual async Task<tsbom_ver02_po> Sync(tsbom_ver02_po model)
    {
    return model;
    }
    }
    }

