import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tdpdotpl_aloc } from './tdpdotpl_aloc.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tdpdotpl_alocService extends BaseService{
 DisplayColumns001: string[] = ['No', 'PDOTPL_IDX', 'PART_IDX', 'D_ARRVL', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tdpdotpl_aloc[] | undefined;
    ListFilter: tdpdotpl_aloc[] | undefined;
    FormData!: tdpdotpl_aloc;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "tdpdotpl_aloc";
    }
}

