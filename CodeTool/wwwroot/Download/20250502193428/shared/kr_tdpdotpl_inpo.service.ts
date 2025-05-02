import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { kr_tdpdotpl_inpo } from './kr_tdpdotpl_inpo.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class kr_tdpdotpl_inpoService extends BaseService{
 DisplayColumns001: string[] = ['No', 'PDOTPL_INPO_IDX', 'PO_CODE', 'PART_NO', 'PART_SNP', 'PO_QTY', 'IN_QTY', 'DONE_YN', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: kr_tdpdotpl_inpo[] | undefined;
    ListFilter: kr_tdpdotpl_inpo[] | undefined;
    FormData!: kr_tdpdotpl_inpo;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/kr_tdpdotpl_inpo";
    }
}

