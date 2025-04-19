import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torderinspection_lp } from 'src/app/shared/MES/torderinspection_lp.model';
import { torderinspection_lpService } from 'src/app/shared/MES/torderinspection_lp.service';

@Component({
  selector: 'app-torderinspection_lp-info',
  templateUrl: './torderinspection_lp-info.component.html',
  styleUrls: ['./torderinspection_lp-info.component.css']
})
export class torderinspection_lpInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torderinspection_lpService: torderinspection_lpService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torderinspection_lpService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.torderinspection_lpSearch();
  }
  torderinspection_lpSearch() {
    this.torderinspection_lpService.GetByIDAsync().subscribe(
      res => {
        this.torderinspection_lpService.FormData = res as torderinspection_lp;
        if (this.torderinspection_lpService.FormData.INSPECTION_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  torderinspection_lpSave() {
    this.torderinspection_lpService.IsShowLoading = true;
    this.torderinspection_lpService.SaveAsync().subscribe(
      res => {
        this.torderinspection_lpService.FormData = res as torderinspection_lp;
        this.Router.navigateByUrl(environment.torderinspection_lpInfo + this.torderinspection_lpService.FormData.INSPECTION_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.torderinspection_lpService.IsShowLoading = false;
      }
    );
  }
  torderinspection_lpAdd() {
    this.Router.navigateByUrl(environment.torderinspection_lpInfo + environment.InitializationNumber);
    this.torderinspection_lpService.BaseParameter.ID = environment.InitializationNumber;
    this.torderinspection_lpSearch();
  }
}

