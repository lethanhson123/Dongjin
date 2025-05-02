import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { tsauth } from './tsauth.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tsauthService extends BaseService{
 DisplayColumns001: string[] = ['No', 'AUTH_IDX', 'AUTH_ID', 'AUTH_NM', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tsauth[] | undefined;
    ListFilter: tsauth[] | undefined;
    FormData!: tsauth;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/tsauth";
    }
}

