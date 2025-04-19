import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tsnon_oper_worker } from './tsnon_oper_worker.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tsnon_oper_workerService extends BaseService{
 DisplayColumns001: string[] = ['No', 'TSNON_OPER_IDX', 'TSNON_OPER_CODE', 'TSNON_OPER_MCNM', 'TSNON_OPER_USERNM', 'TSNON_OPER_DATE', 'TSNON_OPER_COL', 'TSNON_OPER_TIME', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tsnon_oper_worker[] | undefined;
    ListFilter: tsnon_oper_worker[] | undefined;
    FormData!: tsnon_oper_worker;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "tsnon_oper_worker";
    }
}

