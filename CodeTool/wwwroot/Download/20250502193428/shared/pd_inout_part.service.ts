import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { pd_inout_part } from './pd_inout_part.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class pd_inout_partService extends BaseService{
 DisplayColumns001: string[] = ['No', 'PD_INPUT_PART_IDX', 'ORDER_IDX', 'PDPART_IDX', 'DSC_INOUT', 'PUR_QTY', 'PUR_TIME', 'OUT_USER', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: pd_inout_part[] | undefined;
    ListFilter: pd_inout_part[] | undefined;
    FormData!: pd_inout_part;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/pd_inout_part";
    }
}

