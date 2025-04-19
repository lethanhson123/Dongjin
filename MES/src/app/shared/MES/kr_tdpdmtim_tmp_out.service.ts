import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { kr_tdpdmtim_tmp_out } from './kr_tdpdmtim_tmp_out.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class kr_tdpdmtim_tmp_outService extends BaseService{
 DisplayColumns001: string[] = ['No', 'PDMTIN_IDX', 'VLID_PART_IDX', 'VLID_PART_SNP', 'VLID_GRP', 'VLID_DTM', 'VLID_BARCODE', 'VLID_REMARK', 'TDPDOTPLMU', 'PDOTPL_IDX', 'TSCOST_IDX', 'BARCD_LOC', 'VLID_DSCN_YN', 'INSPCTN_YN', 'INSPCTN_GRUP_CODE', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: kr_tdpdmtim_tmp_out[] | undefined;
    ListFilter: kr_tdpdmtim_tmp_out[] | undefined;
    FormData!: kr_tdpdmtim_tmp_out;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "kr_tdpdmtim_tmp_out";
    }
}

