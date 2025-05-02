import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { tdpdotplmu } from './tdpdotplmu.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tdpdotplmuService extends BaseService{
 DisplayColumns001: string[] = ['No', 'TDPDOTPLMU_IDX', 'PDOTPL_IDX', 'PLET_NO', 'PLET_COMS', 'PDOTPL_DTM', 'QTY', 'SE_QTY', 'DSCN_YN', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tdpdotplmu[] | undefined;
    ListFilter: tdpdotplmu[] | undefined;
    FormData!: tdpdotplmu;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/tdpdotplmu";
    }
}

