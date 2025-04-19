import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { kr_tdpdotpl } from './kr_tdpdotpl.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class kr_tdpdotplService extends BaseService{
 DisplayColumns001: string[] = ['No', 'PDOTPL_IDX', 'PO_CODE', 'PART_IDX', 'PART_IDX_SNP', 'PO_QTY', 'NT_QTY', 'PACK_QTY', 'DONE_YN', 'SORTNO', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: kr_tdpdotpl[] | undefined;
    ListFilter: kr_tdpdotpl[] | undefined;
    FormData!: kr_tdpdotpl;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "kr_tdpdotpl";
    }
}

