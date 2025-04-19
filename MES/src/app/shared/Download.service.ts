import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BaseParameter } from './MES/BaseParameter.model';


@Injectable({
    providedIn: 'root'
})
export class DownloadService {

    BaseParameter!: BaseParameter;
    APIURL: string = environment.APIURL;
    Controller: string = "Download";
    Headers: HttpHeaders = new HttpHeaders();


    IPAddress: string = environment.InitializationString;


    constructor(private httpClient: HttpClient) {
        this.InitializationFormData();
        //this.GetIPAddress();
    }
    InitializationFormData() {
        this.BaseParameter = {
        };

        let token = localStorage.getItem(environment.Token);
        this.Headers = this.Headers.append('Authorization', 'Bearer ' + token);
    }
    GetRandomColor(count) {
        var arr = [];
        for (var i = 0; i < count; i++) {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var x = 0; x < 6; x++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
        }
        return color;
    }
    
}

