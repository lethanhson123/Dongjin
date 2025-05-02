import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { tscmpny } from './tscmpny.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tscmpnyService extends BaseService{
 DisplayColumns001: string[] = ['No', 'CMPNY_IDX', 'CMPNY_NM', 'CMPNY_DVS', 'CMPNY_ADDR', 'CMPNY_TEL', 'CMPNY_FAX', 'CMPNY_mngr', 'CMPNY_rmk', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tscmpny[] | undefined;
    ListFilter: tscmpny[] | undefined;
    FormData!: tscmpny;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/tscmpny";
    }
}

