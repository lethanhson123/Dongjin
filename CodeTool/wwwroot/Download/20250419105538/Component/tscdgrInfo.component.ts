import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tscdgr } from 'src/app/shared/MES/tscdgr.model';
import { tscdgrService } from 'src/app/shared/MES/tscdgr.service';

@Component({
  selector: 'app-tscdgr-info',
  templateUrl: './tscdgr-info.component.html',
  styleUrls: ['./tscdgr-info.component.css']
})
export class tscdgrInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tscdgrService: tscdgrService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tscdgrService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tscdgrSearch();
  }
  tscdgrSearch() {
    this.tscdgrService.GetByIDAsync().subscribe(
      res => {
        this.tscdgrService.FormData = res as tscdgr;
        if (this.tscdgrService.FormData.CDGR_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tscdgrSave() {
    this.tscdgrService.IsShowLoading = true;
    this.tscdgrService.SaveAsync().subscribe(
      res => {
        this.tscdgrService.FormData = res as tscdgr;
        this.Router.navigateByUrl(environment.tscdgrInfo + this.tscdgrService.FormData.CDGR_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tscdgrService.IsShowLoading = false;
      }
    );
  }
  tscdgrAdd() {
    this.Router.navigateByUrl(environment.tscdgrInfo + environment.InitializationNumber);
    this.tscdgrService.BaseParameter.ID = environment.InitializationNumber;
    this.tscdgrSearch();
  }
}

