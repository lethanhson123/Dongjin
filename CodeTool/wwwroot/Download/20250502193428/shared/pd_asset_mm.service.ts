import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { pd_asset_mm } from './pd_asset_mm.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class pd_asset_mmService extends BaseService{
 DisplayColumns001: string[] = ['No', 'PD_ASSET_IDX', 'PDP_ASSET_ID', 'PDP_ASSET_INDATE', 'PDP_ASSET_NAME', 'PDP_ASSET_SPC', 'PDP_DEPA', 'PDP_DEPA_USER', 'PDP_DEPA_USERDT', 'PDP_DEPA_DYN', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: pd_asset_mm[] | undefined;
    ListFilter: pd_asset_mm[] | undefined;
    FormData!: pd_asset_mm;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/pd_asset_mm";
    }
}

