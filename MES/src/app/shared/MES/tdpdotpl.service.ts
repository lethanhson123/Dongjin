import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tdpdotpl } from './tdpdotpl.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tdpdotplService extends BaseService{
 DisplayColumns001: string[] = ['No', 'PDOTPL_IDX', 'PO_CODE', 'PART_IDX', 'PART_IDX_SNP', 'PO_QTY', 'NT_QTY', 'PACK_QTY', 'DONE_YN', 'SORTNO', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tdpdotpl[] | undefined;
    ListFilter: tdpdotpl[] | undefined;
    FormData!: tdpdotpl;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "tdpdotpl";
    }
}

