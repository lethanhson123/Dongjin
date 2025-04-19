import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { ttensilforce } from 'src/app/shared/MES/ttensilforce.model';
import { ttensilforceService } from 'src/app/shared/MES/ttensilforce.service';

@Component({
  selector: 'app-ttensilforce-info',
  templateUrl: './ttensilforce-info.component.html',
  styleUrls: ['./ttensilforce-info.component.css']
})
export class ttensilforceInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public ttensilforceService: ttensilforceService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.ttensilforceService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.ttensilforceSearch();
  }
  ttensilforceSearch() {
    this.ttensilforceService.GetByIDAsync().subscribe(
      res => {
        this.ttensilforceService.FormData = res as ttensilforce;
        if (this.ttensilforceService.FormData.FORCE_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  ttensilforceSave() {
    this.ttensilforceService.IsShowLoading = true;
    this.ttensilforceService.SaveAsync().subscribe(
      res => {
        this.ttensilforceService.FormData = res as ttensilforce;
        this.Router.navigateByUrl(environment.ttensilforceInfo + this.ttensilforceService.FormData.FORCE_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.ttensilforceService.IsShowLoading = false;
      }
    );
  }
  ttensilforceAdd() {
    this.Router.navigateByUrl(environment.ttensilforceInfo + environment.InitializationNumber);
    this.ttensilforceService.BaseParameter.ID = environment.InitializationNumber;
    this.ttensilforceSearch();
  }
}

