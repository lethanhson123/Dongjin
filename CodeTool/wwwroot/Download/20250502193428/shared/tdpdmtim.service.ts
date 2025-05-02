import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { tdpdmtim } from './tdpdmtim.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tdpdmtimService extends BaseService{
 DisplayColumns001: string[] = ['No', 'PDMTIN_IDX', 'VLID_PART_IDX', 'VLID_PART_SNP', 'VLID_GRP', 'VLID_DTM', 'VLID_BARCODE', 'VLID_REMARK', 'TDPDOTPLMU_IDX', 'PDOTPL_IDX', 'TSCOST_IDX', 'BARCD_LOC', 'VLID_DSCN_YN', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tdpdmtim[] | undefined;
    ListFilter: tdpdmtim[] | undefined;
    FormData!: tdpdmtim;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/tdpdmtim";
    }
}

