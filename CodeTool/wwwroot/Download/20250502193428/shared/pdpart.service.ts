import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { pdpart } from './pdpart.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class pdpartService extends BaseService{
 DisplayColumns001: string[] = ['No', 'PDPART_IDX', 'PN_V', 'PSPEC_V', 'PN_K', 'PSPEC_K', 'PN_NM', 'PUNIT_IDX', 'PQTY', 'PN_DSCN_YN', 'PN_GROUP', 'PN_PHOTO', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: pdpart[] | undefined;
    ListFilter: pdpart[] | undefined;
    FormData!: pdpart;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/pdpart";
    }
}

