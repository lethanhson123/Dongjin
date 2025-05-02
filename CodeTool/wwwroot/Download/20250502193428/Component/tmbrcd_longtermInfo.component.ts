import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tmbrcd_longterm } from 'src/app/shared/MES/tmbrcd_longterm.model';
import { tmbrcd_longtermService } from 'src/app/shared/MES/tmbrcd_longterm.service';

@Component({
  selector: 'app-tmbrcd_longterm-info',
  templateUrl: './tmbrcd_longterm-info.component.html',
  styleUrls: ['./tmbrcd_longterm-info.component.css']
})
export class tmbrcd_longtermInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tmbrcd_longtermService: tmbrcd_longtermService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tmbrcd_longtermService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tmbrcd_longtermSearch();
  }
  tmbrcd_longtermSearch() {
    this.tmbrcd_longtermService.GetByIDAsync().subscribe(
      res => {
        this.tmbrcd_longtermService.FormData = res as tmbrcd_longterm;
        if (this.tmbrcd_longtermService.FormData.TMBRCD_LONGTERM_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tmbrcd_longtermSave() {
    this.tmbrcd_longtermService.IsShowLoading = true;
    this.tmbrcd_longtermService.SaveAsync().subscribe(
      res => {
        this.tmbrcd_longtermService.FormData = res as tmbrcd_longterm;
        this.Router.navigateByUrl(environment.tmbrcd_longtermInfo + this.tmbrcd_longtermService.FormData.TMBRCD_LONGTERM_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tmbrcd_longtermService.IsShowLoading = false;
      }
    );
  }
  tmbrcd_longtermAdd() {
    this.Router.navigateByUrl(environment.tmbrcd_longtermInfo + environment.InitializationNumber);
    this.tmbrcd_longtermService.BaseParameter.ID = environment.InitializationNumber;
    this.tmbrcd_longtermSearch();
  }
}

