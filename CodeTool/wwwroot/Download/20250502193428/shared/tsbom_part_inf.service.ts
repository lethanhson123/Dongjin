import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { tsbom_part_inf } from './tsbom_part_inf.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tsbom_part_infService extends BaseService{
 DisplayColumns001: string[] = ['No', 'INF_BOM_IDX', 'INF_PART_IDX', 'INF_PART_NONM', 'INF_BOM_UNIT', 'INF_BOM_MAKER', 'INF_BOM_WEIGHT', 'INF_BOM_COLOR', 'INF_BOM_MOQ', 'INF_BOM_RMK', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tsbom_part_inf[] | undefined;
    ListFilter: tsbom_part_inf[] | undefined;
    FormData!: tsbom_part_inf;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/tsbom_part_inf";
    }
}

