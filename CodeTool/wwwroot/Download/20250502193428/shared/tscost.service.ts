import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { tscost } from './tscost.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tscostService extends BaseService{
 DisplayColumns001: string[] = ['No', 'TSCOST_IDX', 'TSPSRT_IDX', 'TSCOST_DT', 'TSCOST_VAL', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tscost[] | undefined;
    ListFilter: tscost[] | undefined;
    FormData!: tscost;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/tscost";
    }
}

