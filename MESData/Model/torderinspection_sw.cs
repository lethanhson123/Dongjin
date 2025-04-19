namespace MESData.Model
{
    public partial class torderinspection_sw : BaseModel
    {
        [Key]
        public int? INSPECTION_IDX { get; set; }
public int? ORDER_IDX { get; set; }
public string? LOC_LRJ { get; set; }
public string? COLSIP { get; set; }
public string? CCH { get; set; }
public string? CCW { get; set; }
public string? ICH { get; set; }
public string? ICW { get; set; }
public string? WIRE_FORCE { get; set; }
public string? IN_RESILT { get; set; }

        public torderinspection_sw()
        {
        }
    }
}

