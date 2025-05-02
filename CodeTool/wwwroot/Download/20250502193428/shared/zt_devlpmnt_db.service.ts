import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { zt_devlpmnt_db } from './zt_devlpmnt_db.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class zt_devlpmnt_dbService extends BaseService{
 DisplayColumns001: string[] = ['No', 'DELP_IDX', 'DELP_DATE', 'DELP_DEPT', 'MES_MENU', 'DELP_NAME', 'DELP_DETIL', 'FILE_DSYN', 'FILE_NM', 'FILE_EX', 'FILE_SIZE', 'CREATE_DTM', 'CREATE_USER', 'STATE', 'PROGRESS', 'DONE_DATE', 'MES_VER', 'DELP_DELT', 'RESULT', 'UPDATE_DTM', 'UPDATE_USER', 'DEP_PHOTO', 'Save'];

    List: zt_devlpmnt_db[] | undefined;
    ListFilter: zt_devlpmnt_db[] | undefined;
    FormData!: zt_devlpmnt_db;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/zt_devlpmnt_db";
    }
}

