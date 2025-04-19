namespace MESData.Model
{
    public partial class tscost_list : BaseModel
    {
        [Key]
        public int? TSCOST_IDX { get; set; }
public string? TSPSRT_IDX { get; set; }
public string? TSCOST_DT { get; set; }
public string? TSCOST_VAL { get; set; }
public DateTime? CREATE_DTM { get; set; }
public string? CREATE_USER { get; set; }
public DateTime? UPDATE_DTM { get; set; }
public string? UPDATE_USER { get; set; }

        public tscost_list()
        {
        }
    }
}

