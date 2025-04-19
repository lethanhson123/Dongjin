import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { apqp_filelst } from 'src/app/shared/MES/apqp_filelst.model';
import { apqp_filelstService } from 'src/app/shared/MES/apqp_filelst.service';

@Component({
  selector: 'app-apqp_filelst-info',
  templateUrl: './apqp_filelst-info.component.html',
  styleUrls: ['./apqp_filelst-info.component.css']
})
export class apqp_filelstInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public apqp_filelstService: apqp_filelstService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.apqp_filelstService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.apqp_filelstSearch();
  }
  apqp_filelstSearch() {
    this.apqp_filelstService.GetByIDAsync().subscribe(
      res => {
        this.apqp_filelstService.FormData = res as apqp_filelst;
        if (this.apqp_filelstService.FormData.APQP_FLLST_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  apqp_filelstSave() {
    this.apqp_filelstService.IsShowLoading = true;
    this.apqp_filelstService.SaveAsync().subscribe(
      res => {
        this.apqp_filelstService.FormData = res as apqp_filelst;
        this.Router.navigateByUrl(environment.apqp_filelstInfo + this.apqp_filelstService.FormData.APQP_FLLST_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.apqp_filelstService.IsShowLoading = false;
      }
    );
  }
  apqp_filelstAdd() {
    this.Router.navigateByUrl(environment.apqp_filelstInfo + environment.InitializationNumber);
    this.apqp_filelstService.BaseParameter.ID = environment.InitializationNumber;
    this.apqp_filelstSearch();
  }
}

