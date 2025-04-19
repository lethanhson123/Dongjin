import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { pd_cmpny_part } from './pd_cmpny_part.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class pd_cmpny_partService extends BaseService{
 DisplayColumns001: string[] = ['No', 'PD_CMPNY_PART_IDX', 'CMPNY_IDX', 'PDPART_IDX', 'DSC_YN', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: pd_cmpny_part[] | undefined;
    ListFilter: pd_cmpny_part[] | undefined;
    FormData!: pd_cmpny_part;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "pd_cmpny_part";
    }
}

