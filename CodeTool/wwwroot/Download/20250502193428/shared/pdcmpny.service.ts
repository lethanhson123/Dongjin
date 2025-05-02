import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { pdcmpny } from './pdcmpny.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class pdcmpnyService extends BaseService{
 DisplayColumns001: string[] = ['No', 'CMPNY_IDX', 'CMPNY_NM', 'CMPNY_DVS', 'CMPNY_NO', 'CMPNY_ADDR', 'CMPNY_TEL', 'CMPNY_FAX', 'CMPNY_MNGR', 'CMPNY_RMK', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: pdcmpny[] | undefined;
    ListFilter: pdcmpny[] | undefined;
    FormData!: pdcmpny;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/pdcmpny";
    }
}

