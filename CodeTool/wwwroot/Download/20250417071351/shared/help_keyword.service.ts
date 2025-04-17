import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { help_keyword } from './help_keyword.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class help_keywordService extends BaseService{
 DisplayColumns001: string[] = ['No', 'help_keyword_id', 'name', 'Save'];

    List: help_keyword[] | undefined;
    ListFilter: help_keyword[] | undefined;
    FormData!: help_keyword;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "help_keyword";
    }
}

