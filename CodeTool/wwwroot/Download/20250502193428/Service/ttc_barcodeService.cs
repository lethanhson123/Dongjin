namespace MESService.Implement
{
    public class ttc_barcodeService : BaseService<ttc_barcode, Ittc_barcodeRepository>
    , Ittc_barcodeService
    {
    private readonly Ittc_barcodeRepository _ttc_barcodeRepository;
    public ttc_barcodeService(Ittc_barcodeRepository ttc_barcodeRepository) : base(ttc_barcodeRepository)
    {
    _ttc_barcodeRepository = ttc_barcodeRepository;
    }
    public override void Initialization(ttc_barcode model)
    {
    BaseInitialization(model);
    }
    public override async Task<ttc_barcode> SaveAsync(ttc_barcode model)
    {
    try
    {
    if (model.TTC_BARCODE_IDX > 0)
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
    public virtual async Task<ttc_barcode> Sync(ttc_barcode model)
    {
    return model;
    }
    }
    }

