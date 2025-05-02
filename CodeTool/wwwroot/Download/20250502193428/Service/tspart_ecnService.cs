namespace MESService.Implement
{
    public class tspart_ecnService : BaseService<tspart_ecn, Itspart_ecnRepository>
    , Itspart_ecnService
    {
    private readonly Itspart_ecnRepository _tspart_ecnRepository;
    public tspart_ecnService(Itspart_ecnRepository tspart_ecnRepository) : base(tspart_ecnRepository)
    {
    _tspart_ecnRepository = tspart_ecnRepository;
    }
    public override void Initialization(tspart_ecn model)
    {
    BaseInitialization(model);
    }
    public override async Task<tspart_ecn> SaveAsync(tspart_ecn model)
    {
    try
    {
    if (model.PARTECN_IDX > 0)
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
    public virtual async Task<tspart_ecn> Sync(tspart_ecn model)
    {
    return model;
    }
    }
    }

