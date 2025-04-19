namespace MESData.Model
{
    public partial class torderinspection : BaseModel
    {
        [Key]
        public int? INSPECTION_IDX { get; set; }
public int? ORDER_IDX { get; set; }
public string? COLSIP { get; set; }
public string? CCH1 { get; set; }
public string? CCW1 { get; set; }
public string? CCH2 { get; set; }
public string? CCW2 { get; set; }
public string? ICH1 { get; set; }
public string? ICW1 { get; set; }
public string? ICH2 { get; set; }
public string? ICW2 { get; set; }
public string? WIRE_FORCE { get; set; }
public int? WIRE_LENGTH { get; set; }
public string? IN_RESILT { get; set; }
public DateTime? CREATE_DTM { get; set; }
public string? CREATE_USER { get; set; }

        public torderinspection()
        {
        }
    }
}

