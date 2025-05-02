import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { zt_log_db } from './zt_log_db.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class zt_log_dbService extends BaseService{
 DisplayColumns001: string[] = ['No', 'IDX', 'MENU_NM', 'TAB_NAME', 'BUTTON_NM', 'USER_ID', 'PRG_CODE', 'DN_YN', 'DATA_TEXT', 'SQL_NM', 'CREATE_DTM', 'Save'];

    List: zt_log_db[] | undefined;
    ListFilter: zt_log_db[] | undefined;
    FormData!: zt_log_db;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/zt_log_db";
    }
}

