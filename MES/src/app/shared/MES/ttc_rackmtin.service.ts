import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ttc_rackmtin } from './ttc_rackmtin.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class ttc_rackmtinService extends BaseService{
 DisplayColumns001: string[] = ['No', 'TRACK_IDX', 'RACKCODE', 'TTC_PART_IDX', 'BARCODE_NM', 'RACKDTM', 'IN_USER', 'RACKOUT_DTM', 'OUT_USER', 'QTY', 'RACKIN_YN', 'RACKOUT_YN', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: ttc_rackmtin[] | undefined;
    ListFilter: ttc_rackmtin[] | undefined;
    FormData!: ttc_rackmtin;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "ttc_rackmtin";
    }
}

