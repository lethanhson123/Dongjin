import { Base } from "./Base.model";
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

export class BaseParameter extends Base{       
    
    Page?: number;
    PageSize?: number;     
    SearchString?: string;        
    ID?: number;
    Code?: number;
}
