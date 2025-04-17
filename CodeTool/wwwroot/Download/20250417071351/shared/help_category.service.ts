import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { help_category } from './help_category.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class help_categoryService extends BaseService{
 DisplayColumns001: string[] = ['No', 'help_category_id', 'name', 'parent_category_id', 'url', 'Save'];

    List: help_category[] | undefined;
    ListFilter: help_category[] | undefined;
    FormData!: help_category;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "help_category";
    }
}

