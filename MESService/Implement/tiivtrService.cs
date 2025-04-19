namespace MESService.Implement
{
    public class tiivtrService : BaseService<tiivtr, ItiivtrRepository>
    , ItiivtrService
    {
        private readonly ItiivtrRepository _tiivtrRepository;
        public tiivtrService(ItiivtrRepository tiivtrRepository) : base(tiivtrRepository)
        {
            _tiivtrRepository = tiivtrRepository;
        }
        public override void Initialization(tiivtr model)
        {
            BaseInitialization(model);
            model.UPDATE_DTM = GlobalHelper.InitializationDateTime;
            if (model.CREATE_DTM == null)
            {
                model.CREATE_DTM = model.UPDATE_DTM;
            }

        }
        public override async Task<tiivtr> SaveAsync(tiivtr model)
        {
            try
            {
                if (model.IV_IDX > 0)
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
        public virtual async Task<tiivtr> Sync(tiivtr model)
        {
            return model;
        }       
    }
}

