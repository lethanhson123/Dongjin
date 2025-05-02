import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { kr_tdpdmtim } from './kr_tdpdmtim.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class kr_tdpdmtimService extends BaseService{
 DisplayColumns001: string[] = ['No', 'PDMTIN_IDX', 'VLID_PART_IDX', 'VLID_PART_SNP', 'VLID_GRP', 'VLID_DTM', 'VLID_BARCODE', 'VLID_REMARK', 'TDPDOTPLMU', 'PDOTPL_VNPOCODE', 'PDOTPL_IDX', 'TSCOST_IDX', 'BARCD_LOC', 'VLID_DSCN_YN', 'INSPCTN_YN', 'INSPCTN_GRUP_CODE', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: kr_tdpdmtim[] | undefined;
    ListFilter: kr_tdpdmtim[] | undefined;
    FormData!: kr_tdpdmtim;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/kr_tdpdmtim";
    }
}

