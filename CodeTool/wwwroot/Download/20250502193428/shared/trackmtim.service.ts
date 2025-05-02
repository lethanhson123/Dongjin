import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { trackmtim } from './trackmtim.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class trackmtimService extends BaseService{
 DisplayColumns001: string[] = ['No', 'TRACK_IDX', 'RACK_IDX', 'RACKCODE', 'TABLE_IDX', 'TABLE_NM', 'LEAD_NM', 'BARCODE_NM', 'RACKDTM', 'RACKOUT_DTM', 'QTY', 'RACKIN_YN', 'RACKOUT_YN', 'CREATE_DTM', 'CREATE_USER', 'Save'];

    List: trackmtim[] | undefined;
    ListFilter: trackmtim[] | undefined;
    FormData!: trackmtim;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/trackmtim";
    }
}

