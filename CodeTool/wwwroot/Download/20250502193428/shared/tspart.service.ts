import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { tspart } from './tspart.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tspartService extends BaseService{
 DisplayColumns001: string[] = ['No', 'PART_IDX', 'PART_NO', 'PART_NM', 'BOM_GRP', 'PART_CAR', 'PART_FML', 'PART_SNP', 'PART_SCN', 'PART_LOC', 'PART_USENY', 'PART_RMK', 'PART_SUPL', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tspart[] | undefined;
    ListFilter: tspart[] | undefined;
    FormData!: tspart;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/tspart";
    }
}

