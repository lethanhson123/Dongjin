import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { aatable } from './aatable.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class aatableService extends BaseService{
 DisplayColumns001: string[] = ['No', 'ID', 'Name', 'Email', 'Save'];

    List: aatable[] | undefined;
    ListFilter: aatable[] | undefined;
    FormData!: aatable;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "aatable";
    }
}

