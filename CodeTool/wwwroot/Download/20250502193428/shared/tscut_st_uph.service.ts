import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { tscut_st_uph } from './tscut_st_uph.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tscut_st_uphService extends BaseService{
 DisplayColumns001: string[] = ['No', 'TSCUT_ST_UPH_IDX', 'TSCUT_ST_UPH_RUT', 'TSCUT_ST_UPH_NAME', 'TSCUT_ST_UPH_MIN', 'TSCUT_ST_UPH_MAX', 'TSCUT_ST_UPH_TCNT', 'TSCUT_ST_UPH_SCNT', 'TSCUT_ST_UPH_RUS', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tscut_st_uph[] | undefined;
    ListFilter: tscut_st_uph[] | undefined;
    FormData!: tscut_st_uph;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/tscut_st_uph";
    }
}

