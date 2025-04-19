import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tdpdotpl_etc } from './tdpdotpl_etc.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tdpdotpl_etcService extends BaseService{
 DisplayColumns001: string[] = ['No', 'TDPDOTPL_ETC_IDX', 'ETC_PO_CODE', 'DATE', 'PART_IDX', 'QTY', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tdpdotpl_etc[] | undefined;
    ListFilter: tdpdotpl_etc[] | undefined;
    FormData!: tdpdotpl_etc;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "tdpdotpl_etc";
    }
}

