import { Base } from "./Base.model";
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

export class BaseParameter extends Base{       
    
    Page?: number;
    PageSize?: number;     
    SearchString?: string;        
    SearchString001?: string;    
    SearchString002?: string;    
    SearchString003?: string;    
    SearchString004?: string;    
    SearchString005?: string;    
    SearchString006?: string;  
    ID?: number;
    ParentID?: number;
    ParentID001?: number;
    ParentID002?: number;
    ParentID003?: number;
    ParentID004?: number;
    ParentID005?: number;
    Code?: string;
    Account?: string;
    Begin?: Date;
    End?: Date;
    ListBegin?: Date[];
    ListID?: number[];
    ListSearchString?: string[];
    ListSearchString001?: string[];
    ListSearchString002?: string[];
}
