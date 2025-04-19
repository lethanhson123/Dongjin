import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { zt_help_db } from './zt_help_db.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class zt_help_dbService extends BaseService{
 DisplayColumns001: string[] = ['No', 'IDX', 'MENU_NM', 'TAB_NAME', 'REV_NO', 'FILE_NM', 'FILE_EX', 'DN_YN', 'CREATE_DTM', 'Save'];

    List: zt_help_db[] | undefined;
    ListFilter: zt_help_db[] | undefined;
    FormData!: zt_help_db;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "zt_help_db";
    }
}

