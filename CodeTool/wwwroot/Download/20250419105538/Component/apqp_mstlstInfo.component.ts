import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { apqp_mstlst } from 'src/app/shared/MES/apqp_mstlst.model';
import { apqp_mstlstService } from 'src/app/shared/MES/apqp_mstlst.service';

@Component({
  selector: 'app-apqp_mstlst-info',
  templateUrl: './apqp_mstlst-info.component.html',
  styleUrls: ['./apqp_mstlst-info.component.css']
})
export class apqp_mstlstInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public apqp_mstlstService: apqp_mstlstService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.apqp_mstlstService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.apqp_mstlstSearch();
  }
  apqp_mstlstSearch() {
    this.apqp_mstlstService.GetByIDAsync().subscribe(
      res => {
        this.apqp_mstlstService.FormData = res as apqp_mstlst;
        if (this.apqp_mstlstService.FormData.APQP_MS_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  apqp_mstlstSave() {
    this.apqp_mstlstService.IsShowLoading = true;
    this.apqp_mstlstService.SaveAsync().subscribe(
      res => {
        this.apqp_mstlstService.FormData = res as apqp_mstlst;
        this.Router.navigateByUrl(environment.apqp_mstlstInfo + this.apqp_mstlstService.FormData.APQP_MS_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.apqp_mstlstService.IsShowLoading = false;
      }
    );
  }
  apqp_mstlstAdd() {
    this.Router.navigateByUrl(environment.apqp_mstlstInfo + environment.InitializationNumber);
    this.apqp_mstlstService.BaseParameter.ID = environment.InitializationNumber;
    this.apqp_mstlstSearch();
  }
}

