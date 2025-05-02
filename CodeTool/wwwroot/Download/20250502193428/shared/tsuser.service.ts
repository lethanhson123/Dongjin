import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { tsuser } from './tsuser.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tsuserService extends BaseService{
 DisplayColumns001: string[] = ['No', 'USER_IDX', 'USER_ID', 'USER_NM', 'PW', 'Dept', 'Note', 'DESC_YN', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tsuser[] | undefined;
    ListFilter: tsuser[] | undefined;
    FormData!: tsuser;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/tsuser";
    }
}

