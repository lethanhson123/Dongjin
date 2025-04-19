import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tsuser_super } from './tsuser_super.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tsuser_superService extends BaseService{
 DisplayColumns001: string[] = ['No', 'USER_IDX', 'USER_ID_NAME', 'NAS_TEST_SER', 'LOC_TEST_SER', 'DESC_YN', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tsuser_super[] | undefined;
    ListFilter: tsuser_super[] | undefined;
    FormData!: tsuser_super;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "tsuser_super";
    }
}

