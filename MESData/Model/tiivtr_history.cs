﻿namespace MESData.Model
{
    public partial class tiivtr_history : BaseModel
    {
        [Key]
        public int? IV_IDX { get; set; }
public string? STOCK_DATE { get; set; }
public int? PART_IDX { get; set; }
public int? LOC_IDX { get; set; }
public string? QTY { get; set; }
public DateTime? CREATE_DTM { get; set; }
public string? CREATE_USER { get; set; }
public DateTime? UPDATE_DTM { get; set; }
public string? UPDATE_USER { get; set; }

        public tiivtr_history()
        {
        }
    }
}

