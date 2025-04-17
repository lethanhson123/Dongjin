namespace MESService.Interface
{
    public interface Ihelp_topicService : IBaseService<help_topic>
    {
        Task<List<help_topic>> GetSOHU();
        Task<List<help_topic>> GetSOHU2025(int RowNumber);
    }
}

