namespace MESData.Model
{
    public partial class help_topic : BaseModel
    {
        [Key]
        public int? help_topic_id { get; set; }
        public string? name { get; set; }        
        public int? help_category_id { get; set; }       
        public string? description { get; set; }
        public string? example { get; set; }
        public string? url { get; set; }

        public help_topic()
        {
        }
    }
}

