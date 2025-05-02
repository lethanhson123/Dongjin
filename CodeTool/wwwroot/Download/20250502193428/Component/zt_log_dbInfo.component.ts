import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { zt_log_db } from 'src/app/shared/MES/zt_log_db.model';
import { zt_log_dbService } from 'src/app/shared/MES/zt_log_db.service';

@Component({
  selector: 'app-zt_log_db-info',
  templateUrl: './zt_log_db-info.component.html',
  styleUrls: ['./zt_log_db-info.component.css']
})
export class zt_log_dbInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public zt_log_dbService: zt_log_dbService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.zt_log_dbService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.zt_log_dbSearch();
  }
  zt_log_dbSearch() {
    this.zt_log_dbService.GetByIDAsync().subscribe(
      res => {
        this.zt_log_dbService.FormData = res as zt_log_db;
        if (this.zt_log_dbService.FormData.IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  zt_log_dbSave() {
    this.zt_log_dbService.IsShowLoading = true;
    this.zt_log_dbService.SaveAsync().subscribe(
      res => {
        this.zt_log_dbService.FormData = res as zt_log_db;
        this.Router.navigateByUrl(environment.zt_log_dbInfo + this.zt_log_dbService.FormData.IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.zt_log_dbService.IsShowLoading = false;
      }
    );
  }
  zt_log_dbAdd() {
    this.Router.navigateByUrl(environment.zt_log_dbInfo + environment.InitializationNumber);
    this.zt_log_dbService.BaseParameter.ID = environment.InitializationNumber;
    this.zt_log_dbSearch();
  }
}

