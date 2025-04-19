import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tdpdotpl_label } from './tdpdotpl_label.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tdpdotpl_labelService extends BaseService{
 DisplayColumns001: string[] = ['No', 'PDOTPL_IDX', 'PDLB_DATE', 'LABEL_NO', 'LABEL_TXT', 'CREATE_DTM', 'CREATE_USER', 'Save'];

    List: tdpdotpl_label[] | undefined;
    ListFilter: tdpdotpl_label[] | undefined;
    FormData!: tdpdotpl_label;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "tdpdotpl_label";
    }
}

