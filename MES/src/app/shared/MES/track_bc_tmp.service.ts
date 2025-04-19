import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { track_bc_tmp } from './track_bc_tmp.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class track_bc_tmpService extends BaseService{
 DisplayColumns001: string[] = ['No', 'TRACK_BC_IDX', 'TRACK_BC_LEAD', 'TRACK_BC_NAME', 'CREATE_DTM', 'CREATE_USER', 'Save'];

    List: track_bc_tmp[] | undefined;
    ListFilter: track_bc_tmp[] | undefined;
    FormData!: track_bc_tmp;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "track_bc_tmp";
    }
}

