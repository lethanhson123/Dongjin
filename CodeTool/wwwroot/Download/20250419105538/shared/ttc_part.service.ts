import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ttc_part } from './ttc_part.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class ttc_partService extends BaseService{
 DisplayColumns001: string[] = ['No', 'TTC_PART_IDX', 'TC_PART_NM', 'TC_DESC', 'RAW_PART_IDX', 'TC_SIZE', 'TC_MC', 'TC_PACKUNIT', 'TC_LOC', 'TC_W_S', 'TC_W_MS', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: ttc_part[] | undefined;
    ListFilter: ttc_part[] | undefined;
    FormData!: ttc_part;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "ttc_part";
    }
}

