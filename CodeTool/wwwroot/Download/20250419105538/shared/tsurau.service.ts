import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tsurau } from './tsurau.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tsurauService extends BaseService{
 DisplayColumns001: string[] = ['No', 'USER_AUTH_IDX', 'USER_IDX', 'AUTH_IDX', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tsurau[] | undefined;
    ListFilter: tsurau[] | undefined;
    FormData!: tsurau;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "tsurau";
    }
}

