import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tmbrcd_his } from 'src/app/shared/MES/tmbrcd_his.model';
import { tmbrcd_hisService } from 'src/app/shared/MES/tmbrcd_his.service';

@Component({
  selector: 'app-tmbrcd_his-info',
  templateUrl: './tmbrcd_his-info.component.html',
  styleUrls: ['./tmbrcd_his-info.component.css']
})
export class tmbrcd_hisInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tmbrcd_hisService: tmbrcd_hisService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tmbrcd_hisService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tmbrcd_hisSearch();
  }
  tmbrcd_hisSearch() {
    this.tmbrcd_hisService.GetByIDAsync().subscribe(
      res => {
        this.tmbrcd_hisService.FormData = res as tmbrcd_his;
        if (this.tmbrcd_hisService.FormData.BARCD_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tmbrcd_hisSave() {
    this.tmbrcd_hisService.IsShowLoading = true;
    this.tmbrcd_hisService.SaveAsync().subscribe(
      res => {
        this.tmbrcd_hisService.FormData = res as tmbrcd_his;
        this.Router.navigateByUrl(environment.tmbrcd_hisInfo + this.tmbrcd_hisService.FormData.BARCD_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tmbrcd_hisService.IsShowLoading = false;
      }
    );
  }
  tmbrcd_hisAdd() {
    this.Router.navigateByUrl(environment.tmbrcd_hisInfo + environment.InitializationNumber);
    this.tmbrcd_hisService.BaseParameter.ID = environment.InitializationNumber;
    this.tmbrcd_hisSearch();
  }
}

