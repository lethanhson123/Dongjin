namespace MESData.Model
{
    public partial class help_category : BaseModel
    {
        public int? help_category_id { get; set; }
public string? name { get; set; }
public int? parent_category_id { get; set; }
public string? url { get; set; }

        public help_category()
        {
        }
    }
}

