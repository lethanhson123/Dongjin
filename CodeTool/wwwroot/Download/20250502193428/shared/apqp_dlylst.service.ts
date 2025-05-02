import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { apqp_dlylst } from './apqp_dlylst.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class apqp_dlylstService extends BaseService{
 DisplayColumns001: string[] = ['No', 'APQP_DLYLST_IDX', 'APQP_MSTLST_IDX', 'APQP_DLYLST_RNK', 'APQP_DLYLST_NXTDT', 'APQP_DLYLST_NM', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: apqp_dlylst[] | undefined;
    ListFilter: apqp_dlylst[] | undefined;
    FormData!: apqp_dlylst;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/apqp_dlylst";
    }
}

