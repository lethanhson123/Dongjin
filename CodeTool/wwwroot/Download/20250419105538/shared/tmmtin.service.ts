import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tmmtin } from './tmmtin.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tmmtinService extends BaseService{
 DisplayColumns001: string[] = ['No', 'MTIN_IDX', 'PART_IDX', 'UTM', 'DESC', 'QTY', 'NET_WT', 'GRS_WT', 'PLET_NO', 'SHPD_NO', 'MTIN_DTM', 'BRCD_PRNT', 'DSCN_YN', 'MTIN_RMK', 'SNP_QTY', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tmmtin[] | undefined;
    ListFilter: tmmtin[] | undefined;
    FormData!: tmmtin;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "tmmtin";
    }
}

