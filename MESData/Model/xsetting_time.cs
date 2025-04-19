namespace MESData.Model
{
    public partial class xsetting_time : BaseModel
    {
        [Key]
        public int? SETTING_IDX { get; set; }
public string? TABLE_NM { get; set; }
public string? SUB_NM { get; set; }
public string? REMARK { get; set; }
public string? BASIC_TIME { get; set; }
public string? UNIT { get; set; }
public string? TIME { get; set; }

        public xsetting_time()
        {
        }
    }
}

