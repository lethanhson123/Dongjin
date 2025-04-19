import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tsmnau } from './tsmnau.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tsmnauService extends BaseService{
 DisplayColumns001: string[] = ['No', 'MENU_AUTH_IDX', 'MENU_IDX', 'AUTH_IDX', 'MENU_AUTH_YN', 'IQ_AUTH_YN', 'RGST_AUTH_YN', 'MDFY_AUTH_YN', 'DEL_AUTH_YN', 'CAN_AUTH_YN', 'EXCL_AUTH_YN', 'DNLD_AUTH_YN', 'PRNT_AUTH_YN', 'ETC1_AUTH_YN', 'ETC2_AUTH_YN', 'ETC3_AUTH_YN', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tsmnau[] | undefined;
    ListFilter: tsmnau[] | undefined;
    FormData!: tsmnau;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "tsmnau";
    }
}

