import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torderlist_wtime } from 'src/app/shared/MES/torderlist_wtime.model';
import { torderlist_wtimeService } from 'src/app/shared/MES/torderlist_wtime.service';

@Component({
  selector: 'app-torderlist_wtime-info',
  templateUrl: './torderlist_wtime-info.component.html',
  styleUrls: ['./torderlist_wtime-info.component.css']
})
export class torderlist_wtimeInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torderlist_wtimeService: torderlist_wtimeService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torderlist_wtimeService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.torderlist_wtimeSearch();
  }
  torderlist_wtimeSearch() {
    this.torderlist_wtimeService.GetByIDAsync().subscribe(
      res => {
        this.torderlist_wtimeService.FormData = res as torderlist_wtime;
        if (this.torderlist_wtimeService.FormData.TOWT_INDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  torderlist_wtimeSave() {
    this.torderlist_wtimeService.IsShowLoading = true;
    this.torderlist_wtimeService.SaveAsync().subscribe(
      res => {
        this.torderlist_wtimeService.FormData = res as torderlist_wtime;
        this.Router.navigateByUrl(environment.torderlist_wtimeInfo + this.torderlist_wtimeService.FormData.TOWT_INDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.torderlist_wtimeService.IsShowLoading = false;
      }
    );
  }
  torderlist_wtimeAdd() {
    this.Router.navigateByUrl(environment.torderlist_wtimeInfo + environment.InitializationNumber);
    this.torderlist_wtimeService.BaseParameter.ID = environment.InitializationNumber;
    this.torderlist_wtimeSearch();
  }
}

