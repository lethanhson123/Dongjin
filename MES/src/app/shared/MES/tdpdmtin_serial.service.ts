import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tdpdmtin_serial } from './tdpdmtin_serial.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tdpdmtin_serialService extends BaseService{
 DisplayColumns001: string[] = ['No', 'TDPDMTIN_SERIAL_IDX', 'PART_IDX', 'TDPD_DATE', 'SEQ_NO', 'SERIAL_NO', 'CREATE_DTM', 'CREATE_USER', 'Save'];

    List: tdpdmtin_serial[] | undefined;
    ListFilter: tdpdmtin_serial[] | undefined;
    FormData!: tdpdmtin_serial;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "tdpdmtin_serial";
    }
}

