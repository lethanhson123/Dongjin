﻿namespace MESData.Model
{
    public partial class pd_tiivtr : BaseModel
    {
        [Key]
        public int? IV_IDX { get; set; }
public int? PART_IDX { get; set; }
public int? LOC_IDX { get; set; }
public int? ORDER_IDX { get; set; }
public string? IMP_YN { get; set; }
public string? QTY { get; set; }
public DateTime? CREATE_DTM { get; set; }
public string? CREATE_USER { get; set; }
public DateTime? UPDATE_DTM { get; set; }
public string? UPDATE_USER { get; set; }

        public pd_tiivtr()
        {
        }
    }
}

