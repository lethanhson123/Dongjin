import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { torder_bom_spst1 } from './torder_bom_spst1.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class torder_bom_spst1Service extends BaseService{
 DisplayColumns001: string[] = ['No', 'TORDER_BOMSPST_IDX', 'TORDER_BARCODENM', 'BARCODE_QTY', 'USE_QTY', 'DSCN_YN', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: torder_bom_spst1[] | undefined;
    ListFilter: torder_bom_spst1[] | undefined;
    FormData!: torder_bom_spst1;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/torder_bom_spst1";
    }
}

