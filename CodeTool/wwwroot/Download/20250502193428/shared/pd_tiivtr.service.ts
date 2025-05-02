import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { pd_tiivtr } from './pd_tiivtr.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class pd_tiivtrService extends BaseService{
 DisplayColumns001: string[] = ['No', 'IV_IDX', 'PART_IDX', 'LOC_IDX', 'ORDER_IDX', 'IMP_YN', 'QTY', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: pd_tiivtr[] | undefined;
    ListFilter: pd_tiivtr[] | undefined;
    FormData!: pd_tiivtr;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/pd_tiivtr";
    }
}

