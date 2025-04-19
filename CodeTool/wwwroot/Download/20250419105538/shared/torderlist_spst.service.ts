import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { torderlist_spst } from './torderlist_spst.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class torderlist_spstService extends BaseService{
 DisplayColumns001: string[] = ['No', 'ORDER_IDX', 'OR_NO', 'WORK_WEEK', 'PO_DT', 'LEAD_NO', 'PO_QTY', 'SAFTY_QTY', 'MC', 'BUNDLE_SIZE', 'PERFORMN', 'CONDITION', 'LEAD_COUNT', 'PO_YN', 'DSCN_YN', 'ERROR_YN', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'FCTRY_NM', 'REP', 'TORDER_FG', 'TOEXCEL_QTY', 'Save'];

    List: torderlist_spst[] | undefined;
    ListFilter: torderlist_spst[] | undefined;
    FormData!: torderlist_spst;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "torderlist_spst";
    }
}

