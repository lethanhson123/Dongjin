import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { apqp_dlylst } from 'src/app/shared/MES/apqp_dlylst.model';
import { apqp_dlylstService } from 'src/app/shared/MES/apqp_dlylst.service';

@Component({
  selector: 'app-apqp_dlylst-info',
  templateUrl: './apqp_dlylst-info.component.html',
  styleUrls: ['./apqp_dlylst-info.component.css']
})
export class apqp_dlylstInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public apqp_dlylstService: apqp_dlylstService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.apqp_dlylstService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.apqp_dlylstSearch();
  }
  apqp_dlylstSearch() {
    this.apqp_dlylstService.GetByIDAsync().subscribe(
      res => {
        this.apqp_dlylstService.FormData = res as apqp_dlylst;
        if (this.apqp_dlylstService.FormData.APQP_DLYLST_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  apqp_dlylstSave() {
    this.apqp_dlylstService.IsShowLoading = true;
    this.apqp_dlylstService.SaveAsync().subscribe(
      res => {
        this.apqp_dlylstService.FormData = res as apqp_dlylst;
        this.Router.navigateByUrl(environment.apqp_dlylstInfo + this.apqp_dlylstService.FormData.APQP_DLYLST_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.apqp_dlylstService.IsShowLoading = false;
      }
    );
  }
  apqp_dlylstAdd() {
    this.Router.navigateByUrl(environment.apqp_dlylstInfo + environment.InitializationNumber);
    this.apqp_dlylstService.BaseParameter.ID = environment.InitializationNumber;
    this.apqp_dlylstSearch();
  }
}

