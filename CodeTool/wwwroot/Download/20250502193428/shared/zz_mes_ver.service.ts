import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { zz_mes_ver } from './zz_mes_ver.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class zz_mes_verService extends BaseService{
 DisplayColumns001: string[] = ['No', 'VER_IDX', 'VER_MAJOR', 'VER_MINJOR', 'VER_BUILD', 'VER_REVISION', 'Save'];

    List: zz_mes_ver[] | undefined;
    ListFilter: zz_mes_ver[] | undefined;
    FormData!: zz_mes_ver;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/zz_mes_ver";
    }
}

