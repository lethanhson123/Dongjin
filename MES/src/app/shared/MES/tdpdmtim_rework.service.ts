﻿import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tdpdmtim_rework } from './tdpdmtim_rework.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tdpdmtim_reworkService extends BaseService{
 DisplayColumns001: string[] = ['No', 'PDMTIN_IDX', 'VLID_PART_IDX', 'VLID_PART_SNP', 'VLID_GRP', 'VLID_DTM', 'VLID_BARCODE', 'VLID_REMARK', 'TDPDOTPLMU_IDX', 'PDOTPL_IDX', 'TSCOST_IDX', 'BARCD_LOC', 'VLID_DSCN_YN', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tdpdmtim_rework[] | undefined;
    ListFilter: tdpdmtim_rework[] | undefined;
    FormData!: tdpdmtim_rework;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "tdpdmtim_rework";
    }
}

