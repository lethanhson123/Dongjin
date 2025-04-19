import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { kr_tdpdmtim_tmp } from './kr_tdpdmtim_tmp.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class kr_tdpdmtim_tmpService extends BaseService{
 DisplayColumns001: string[] = ['No', 'KR_TDPDMTIN_IDX', 'KR_TDPDMTIN_POCODE', 'KR_TDPDMTIN_PLTNO', 'KR_TDPDMTIN_PART_NO', 'KR_TDPDMTIN_SNP', 'KR_TDPDMTIN_VLID_GRP', 'KR_TDPDMTIN_DTM', 'KR_TDPDMTIN_BARCODE', 'KR_TDPDMTIN_REMARK', 'KR_TDPDMTIN_DSNY', 'KR_TDPDMTIN_GRUPCD', 'KR_TDPDMTIN_INSPNY', 'KR_TDPDMTIN_MIDX', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: kr_tdpdmtim_tmp[] | undefined;
    ListFilter: kr_tdpdmtim_tmp[] | undefined;
    FormData!: kr_tdpdmtim_tmp;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "kr_tdpdmtim_tmp";
    }
}

