import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { pd_part_cost } from './pd_part_cost.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class pd_part_costService extends BaseService{
 DisplayColumns001: string[] = ['No', 'PDCOST_IDX', 'PDPART_IDX', 'CMPNY_IDX', 'PD_COST_DATE', 'PD_COST', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: pd_part_cost[] | undefined;
    ListFilter: pd_part_cost[] | undefined;
    FormData!: pd_part_cost;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "pd_part_cost";
    }
}

