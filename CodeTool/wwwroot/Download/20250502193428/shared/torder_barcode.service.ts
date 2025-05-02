import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { torder_barcode } from './torder_barcode.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class torder_barcodeService extends BaseService{
 DisplayColumns001: string[] = ['No', 'TORDER_BARCODE_IDX', 'TORDER_BARCODENM', 'ORDER_IDX', 'Barcode_SEQ', 'TORDER_BC_PRNT', 'TORDER_BC_WORK', 'DSCN_YN', 'WORK_START', 'WORK_END', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: torder_barcode[] | undefined;
    ListFilter: torder_barcode[] | undefined;
    FormData!: torder_barcode;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/torder_barcode";
    }
}

