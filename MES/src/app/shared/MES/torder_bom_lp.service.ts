import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { torder_bom_lp } from './torder_bom_lp.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class torder_bom_lpService extends BaseService{
 DisplayColumns001: string[] = ['No', 'TORDER_BOM_IDX', 'ORDER_IDX', 'T1_TOOL_IDX', 'T2_TOOL_IDX', 'ERROR_CHK', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: torder_bom_lp[] | undefined;
    ListFilter: torder_bom_lp[] | undefined;
    FormData!: torder_bom_lp;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "torder_bom_lp";
    }
}

