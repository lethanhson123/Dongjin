import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { torder_bom_sw } from './torder_bom_sw.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class torder_bom_swService extends BaseService{
 DisplayColumns001: string[] = ['No', 'TORDER_BOM_IDX', 'ORDER_IDX', 'LOC_LRJ', 'PERFORMN', 'DSCN_YN', 'T1_TOOL_IDX', 'ERROR_CHK', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: torder_bom_sw[] | undefined;
    ListFilter: torder_bom_sw[] | undefined;
    FormData!: torder_bom_sw;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/torder_bom_sw";
    }
}

