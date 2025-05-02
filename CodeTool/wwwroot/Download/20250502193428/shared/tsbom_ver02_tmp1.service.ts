import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { tsbom_ver02_tmp1 } from './tsbom_ver02_tmp1.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tsbom_ver02_tmp1Service extends BaseService{
 DisplayColumns001: string[] = ['No', 'BOM_IDX', 'PAREN_PART_NO', 'PAREN_EO_NO', 'PART_NO', 'BOM_GRUP', 'BOM_DES', 'BOM_RMK', 'Save'];

    List: tsbom_ver02_tmp1[] | undefined;
    ListFilter: tsbom_ver02_tmp1[] | undefined;
    FormData!: tsbom_ver02_tmp1;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/tsbom_ver02_tmp1";
    }
}

