import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { help_topic } from './help_topic.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class help_topicService extends BaseService{
 DisplayColumns001: string[] = ['No', 'help_topic_id', 'name', 'help_category_id', 'description', 'example', 'url', 'Save'];

    List: help_topic[] | undefined;
    ListFilter: help_topic[] | undefined;
    FormData!: help_topic;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "help_topic";
    }
}

