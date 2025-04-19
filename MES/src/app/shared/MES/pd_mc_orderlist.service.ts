import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { pd_mc_orderlist } from './pd_mc_orderlist.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class pd_mc_orderlistService extends BaseService{
 DisplayColumns001: string[] = ['No', 'PD_MC_ORDER_IDX', 'PD_PART_IDX', 'PD_PURDATE', 'PD_MC_NO', 'PD_MC_QTY', 'PD_MC_UNIT', 'PD_MC_COST', 'PD_BYORDER', 'PD_MC_CMPYNM', 'PD_MC_STAY', 'PD_MC_APP', 'PD_MC_REMARK', 'PD_ORDER_NO', 'PD_MC_ODDATE', 'PD_PAYCOST', 'PD_MC_DSN_YN', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: pd_mc_orderlist[] | undefined;
    ListFilter: pd_mc_orderlist[] | undefined;
    FormData!: pd_mc_orderlist;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "pd_mc_orderlist";
    }
}

