import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { help_relation } from './help_relation.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class help_relationService extends BaseService{
 DisplayColumns001: string[] = ['No', 'help_topic_id', 
'help_keyword_id', 
'Save'];

    List: help_relation[] | undefined;
    ListFilter: help_relation[] | undefined;
    FormData!: help_relation;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "help_relation";
    }
}

