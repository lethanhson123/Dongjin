namespace MESService.Implement
{
    public class torder_barcode_spService : BaseService<torder_barcode_sp, Itorder_barcode_spRepository>
    , Itorder_barcode_spService
    {
    private readonly Itorder_barcode_spRepository _torder_barcode_spRepository;
    public torder_barcode_spService(Itorder_barcode_spRepository torder_barcode_spRepository) : base(torder_barcode_spRepository)
    {
    _torder_barcode_spRepository = torder_barcode_spRepository;
    }
    public override void Initialization(torder_barcode_sp model)
    {
    BaseInitialization(model);
    }
    public override async Task<torder_barcode_sp> SaveAsync(torder_barcode_sp model)
    {
    try
    {
    if (model.TORDER_BARCODE_IDX > 0)
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
    public virtual async Task<torder_barcode_sp> Sync(torder_barcode_sp model)
    {
    return model;
    }
    }
    }

