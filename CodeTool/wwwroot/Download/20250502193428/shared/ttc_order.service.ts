import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { ttc_order } from './ttc_order.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class ttc_orderService extends BaseService{
 DisplayColumns001: string[] = ['No', 'TTC_PO_INX', 'TTC_PN_IDX', 'TTC_PO_DT', 'TTC_PO', 'PERFORMN', 'CONDITION', 'DSCN_YN', 'ERROR_YN', 'TTC_ENG', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: ttc_order[] | undefined;
    ListFilter: ttc_order[] | undefined;
    FormData!: ttc_order;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/ttc_order";
    }
}

