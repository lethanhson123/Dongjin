import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { tsbom_ver02 } from './tsbom_ver02.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tsbom_ver02Service extends BaseService{
 DisplayColumns001: string[] = ['No', 'BOM_IDX', 'PAREN_PART_IDX', 'PAREN_EO_IDX', 'PART_IDX', 'LV_NO', 'BOM_GRUP', 'BOM_DES', 'BOM_RMK', 'DSYN', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tsbom_ver02[] | undefined;
    ListFilter: tsbom_ver02[] | undefined;
    FormData!: tsbom_ver02;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/tsbom_ver02";
    }
}

