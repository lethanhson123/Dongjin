import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tsmenu } from './tsmenu.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tsmenuService extends BaseService{
 DisplayColumns001: string[] = ['No', 'MENU_IDX', 'MENU_CD', 'MENU_LVL', 'MENU_NM_EN', 'MENU_NM_HAN', 'MENU_NM_VIE', 'SCRN_PATH', 'DECYN', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tsmenu[] | undefined;
    ListFilter: tsmenu[] | undefined;
    FormData!: tsmenu;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "tsmenu";
    }
}

