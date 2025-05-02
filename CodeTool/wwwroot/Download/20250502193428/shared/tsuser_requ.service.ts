import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { tsuser_requ } from './tsuser_requ.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tsuser_requService extends BaseService{
 DisplayColumns001: string[] = ['No', 'REQU_IDX', 'REQU_ID', 'REQU_DATE', 'REQU_NOTE', 'REQU_NID', 'REQU_NAME', 'REQU_DEP', 'REQU_TSAUTH', 'REQU_DES', 'REQU_APP', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tsuser_requ[] | undefined;
    ListFilter: tsuser_requ[] | undefined;
    FormData!: tsuser_requ;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/tsuser_requ";
    }
}

