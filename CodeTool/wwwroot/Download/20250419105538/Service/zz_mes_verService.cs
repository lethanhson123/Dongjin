namespace MESService.Implement
{
    public class zz_mes_verService : BaseService<zz_mes_ver, Izz_mes_verRepository>
    , Izz_mes_verService
    {
    private readonly Izz_mes_verRepository _zz_mes_verRepository;
    public zz_mes_verService(Izz_mes_verRepository zz_mes_verRepository) : base(zz_mes_verRepository)
    {
    _zz_mes_verRepository = zz_mes_verRepository;
    }
    public override void Initialization(zz_mes_ver model)
    {
    BaseInitialization(model);
    }
    public override async Task<zz_mes_ver> SaveAsync(zz_mes_ver model)
    {
    try
    {
    if (model.VER_IDX > 0)
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
    public virtual async Task<zz_mes_ver> Sync(zz_mes_ver model)
    {
    return model;
    }
    }
    }

