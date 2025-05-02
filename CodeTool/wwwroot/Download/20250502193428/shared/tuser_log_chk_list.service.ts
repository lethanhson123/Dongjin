import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { tuser_log_chk_list } from './tuser_log_chk_list.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tuser_log_chk_listService extends BaseService{
 DisplayColumns001: string[] = ['No', 'TUSER_IDX', 'TS_USERID', 'TS_USER_IP', 'CREATE_DTM', 'CREATE_USER', 'Save'];

    List: tuser_log_chk_list[] | undefined;
    ListFilter: tuser_log_chk_list[] | undefined;
    FormData!: tuser_log_chk_list;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/tuser_log_chk_list";
    }
}

