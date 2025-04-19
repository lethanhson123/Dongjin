import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { torder_spc } from './torder_spc.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class torder_spcService extends BaseService{
 DisplayColumns001: string[] = ['No', 'SPC_IDX', 'SPC_GRP', 'LEAD_IDX', 'TERM_IDX', 'SPC_DATE', 'SPC_ST', 'SPC_MIN', 'SPC_MAX', 'CCH_XN', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: torder_spc[] | undefined;
    ListFilter: torder_spc[] | undefined;
    FormData!: torder_spc;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "torder_spc";
    }
}

