import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ttensilforce } from './ttensilforce.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class ttensilforceService extends BaseService{
 DisplayColumns001: string[] = ['No', 'FORCE_IDX', 'FORCE_NM', 'FORCE_MIN', 'FORCE_MAX', 'STRENGTH', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: ttensilforce[] | undefined;
    ListFilter: ttensilforce[] | undefined;
    FormData!: ttensilforce;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "ttensilforce";
    }
}

