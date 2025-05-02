import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { kr_tiivtr } from './kr_tiivtr.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class kr_tiivtrService extends BaseService{
 DisplayColumns001: string[] = ['No', 'IV_IDX', 'PART_IDX', 'LOC_IDX', 'QTY', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: kr_tiivtr[] | undefined;
    ListFilter: kr_tiivtr[] | undefined;
    FormData!: kr_tiivtr;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/kr_tiivtr";
    }
}

