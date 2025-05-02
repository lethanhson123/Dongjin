import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { ttensilforce_usw } from './ttensilforce_usw.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class ttensilforce_uswService extends BaseService{
 DisplayColumns001: string[] = ['No', 'FORCE_USW_IDX', 'FORCE_USW_NM', 'FORCE_USW_MIN_HORI', 'FORCE_USW_MIN_VERT', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: ttensilforce_usw[] | undefined;
    ListFilter: ttensilforce_usw[] | undefined;
    FormData!: ttensilforce_usw;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/ttensilforce_usw";
    }
}

