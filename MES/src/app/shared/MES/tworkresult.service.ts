import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tworkresult } from './tworkresult.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tworkresultService extends BaseService{
 DisplayColumns001: string[] = ['No', 'WORK_IDX', 'GROUP_CODE', 'WORK_DTM', 'USER_IDX', 'W_GRC', 'W_PEP', 'LEAD_NM', 'PART_IDX', 'GOOD_QTY', 'BAD_QTY', 'ETC_QTY', 'TOT_QTY', 'ORDER_IDX', 'DSCN_YN', 'WK_ST', 'WK_ET', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'PART_NM', 'ROUTER', 'WORK_RMK', 'MC_NM', 'Q_CON', 'Save'];

    List: tworkresult[] | undefined;
    ListFilter: tworkresult[] | undefined;
    FormData!: tworkresult;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "tworkresult";
    }
}

