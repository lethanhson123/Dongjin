import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tdpdmtim_loc } from './tdpdmtim_loc.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tdpdmtim_locService extends BaseService{
 DisplayColumns001: string[] = ['No', 'TDLOC_IDX', 'TDLOC_PART_IDX', 'TDLOC_PARTNO', 'TDLOC_COSM', 'TDLOC_MOQ', 'TDLOC_PARTNM', 'TDLOC_LOC', 'TDLOC_REMARK', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tdpdmtim_loc[] | undefined;
    ListFilter: tdpdmtim_loc[] | undefined;
    FormData!: tdpdmtim_loc;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "tdpdmtim_loc";
    }
}

