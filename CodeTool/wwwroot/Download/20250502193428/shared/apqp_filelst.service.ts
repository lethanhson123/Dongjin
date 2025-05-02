import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { apqp_filelst } from './apqp_filelst.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class apqp_filelstService extends BaseService{
 DisplayColumns001: string[] = ['No', 'APQP_FLLST_IDX', 'APQP_MSTLST_IDX', 'APQP_FLLST_RNK', 'APQP_FLLST_DATE', 'APQP_FLLST_RVW', 'APQP_FLLST_NM', 'APQP_FLLST_ETN', 'APQP_FLLST_SIZE', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: apqp_filelst[] | undefined;
    ListFilter: apqp_filelst[] | undefined;
    FormData!: apqp_filelst;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/apqp_filelst";
    }
}

