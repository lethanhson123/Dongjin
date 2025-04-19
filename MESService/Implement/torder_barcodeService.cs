namespace MESService.Implement
{
    public class torder_barcodeService : BaseService<torder_barcode, Itorder_barcodeRepository>
    , Itorder_barcodeService
    {
    private readonly Itorder_barcodeRepository _torder_barcodeRepository;
    public torder_barcodeService(Itorder_barcodeRepository torder_barcodeRepository) : base(torder_barcodeRepository)
    {
    _torder_barcodeRepository = torder_barcodeRepository;
    }
    public override void Initialization(torder_barcode model)
    {
    BaseInitialization(model);
    }
    public override async Task<torder_barcode> SaveAsync(torder_barcode model)
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
    public virtual async Task<torder_barcode> Sync(torder_barcode model)
    {
    return model;
    }
    }
    }

