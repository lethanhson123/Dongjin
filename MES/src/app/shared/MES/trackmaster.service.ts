import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { trackmaster } from './trackmaster.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class trackmasterService extends BaseService{
 DisplayColumns001: string[] = ['No', 'RACK_IDX', 'LEAD_NO', 'HOOK_RACK', 'SFTY_STK', 'REP', 'CUR_LEADS', 'SP', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: trackmaster[] | undefined;
    ListFilter: trackmaster[] | undefined;
    FormData!: trackmaster;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "trackmaster";
    }
}

