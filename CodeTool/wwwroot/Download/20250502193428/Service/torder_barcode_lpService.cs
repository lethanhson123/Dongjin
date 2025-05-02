namespace MESService.Implement
{
    public class torder_barcode_lpService : BaseService<torder_barcode_lp, Itorder_barcode_lpRepository>
    , Itorder_barcode_lpService
    {
    private readonly Itorder_barcode_lpRepository _torder_barcode_lpRepository;
    public torder_barcode_lpService(Itorder_barcode_lpRepository torder_barcode_lpRepository) : base(torder_barcode_lpRepository)
    {
    _torder_barcode_lpRepository = torder_barcode_lpRepository;
    }
    public override void Initialization(torder_barcode_lp model)
    {
    BaseInitialization(model);
    }
    public override async Task<torder_barcode_lp> SaveAsync(torder_barcode_lp model)
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
    public virtual async Task<torder_barcode_lp> Sync(torder_barcode_lp model)
    {
    return model;
    }
    }
    }

