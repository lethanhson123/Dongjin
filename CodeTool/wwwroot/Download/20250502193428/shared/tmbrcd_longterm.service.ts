import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { tmbrcd_longterm } from './tmbrcd_longterm.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tmbrcd_longtermService extends BaseService{
 DisplayColumns001: string[] = ['No', 'TMBRCD_LONGTERM_IDX', 'LT_BARCD_IDX', 'LT_INS_DATE', 'LT_RUS', 'LT_STAY', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tmbrcd_longterm[] | undefined;
    ListFilter: tmbrcd_longterm[] | undefined;
    FormData!: tmbrcd_longterm;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/tmbrcd_longterm";
    }
}

