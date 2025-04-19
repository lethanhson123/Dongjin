import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { torder_bom_not_climp } from './torder_bom_not_climp.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class torder_bom_not_climpService extends BaseService{
 DisplayColumns001: string[] = ['No', 'CLIMP_IDX', 'CLIMP_TERM', 'Save'];

    List: torder_bom_not_climp[] | undefined;
    ListFilter: torder_bom_not_climp[] | undefined;
    FormData!: torder_bom_not_climp;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "torder_bom_not_climp";
    }
}

