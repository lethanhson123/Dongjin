import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { trackmtim_lt_insp } from './trackmtim_lt_insp.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class trackmtim_lt_inspService extends BaseService{
 DisplayColumns001: string[] = ['No', 'LT_INSP_IDX', 'TRACKMTIN_IDX', 'INSP_DATE', 'INSP_QTY', 'OK_QTY', 'NG_QTY', 'INSP_RESULT', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: trackmtim_lt_insp[] | undefined;
    ListFilter: trackmtim_lt_insp[] | undefined;
    FormData!: trackmtim_lt_insp;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/trackmtim_lt_insp";
    }
}

