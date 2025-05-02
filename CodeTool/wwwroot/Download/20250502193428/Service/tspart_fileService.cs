namespace MESService.Implement
{
    public class tspart_fileService : BaseService<tspart_file, Itspart_fileRepository>
    , Itspart_fileService
    {
    private readonly Itspart_fileRepository _tspart_fileRepository;
    public tspart_fileService(Itspart_fileRepository tspart_fileRepository) : base(tspart_fileRepository)
    {
    _tspart_fileRepository = tspart_fileRepository;
    }
    public override void Initialization(tspart_file model)
    {
    BaseInitialization(model);
    }
    public override async Task<tspart_file> SaveAsync(tspart_file model)
    {
    try
    {
    if (model.PARTFILE_IDX > 0)
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
    public virtual async Task<tspart_file> Sync(tspart_file model)
    {
    return model;
    }
    }
    }

