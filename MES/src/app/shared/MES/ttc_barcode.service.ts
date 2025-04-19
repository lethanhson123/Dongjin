import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ttc_barcode } from './ttc_barcode.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class ttc_barcodeService extends BaseService{
 DisplayColumns001: string[] = ['No', 'TTC_BARCODE_IDX', 'TTC_BARCODENM', 'TTC_ORDER_IDX', 'Barcode_SEQ', 'TTC_BC_WORK', 'DSCN_YN', 'WORK_START', 'WORK_END', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: ttc_barcode[] | undefined;
    ListFilter: ttc_barcode[] | undefined;
    FormData!: ttc_barcode;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "ttc_barcode";
    }
}

