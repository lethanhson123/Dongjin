import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { Router, NavigationEnd } from '@angular/router';

import { NotificationService } from 'src/app/shared/Notification.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  PageTitle = environment.PageTitle;
  PageDescription = environment.PageDescription;
  PageTitleShort = environment.PageTitleShort;
  queryString: string = environment.InitializationString;
  queryStringSub: string = environment.InitializationString;
  Token: string = environment.InitializationString;
  constructor(
    public Sanitizer: DomSanitizer,
    public Router: Router,
    public NotificationService: NotificationService,


  ) {
    
  }
  ngAfterViewInit() {
  }

  
}