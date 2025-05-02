import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { tmbrcd_his } from './tmbrcd_his.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tmbrcd_hisService extends BaseService{
 DisplayColumns001: string[] = ['No', 'BARCD_IDX', 'BARCD_ID', 'PKG_GRP_IDX', 'PKG_GRP', 'PKG_QTY', 'PKG_OUTQTY', 'DSCN_YN', 'OUT_DTM', 'MTIN_IDX', 'BARCD_LOC', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'BBCO', 'Save'];

    List: tmbrcd_his[] | undefined;
    ListFilter: tmbrcd_his[] | undefined;
    FormData!: tmbrcd_his;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/tmbrcd_his";
    }
}

