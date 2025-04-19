import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { pdcdgr } from 'src/app/shared/MES/pdcdgr.model';
import { pdcdgrService } from 'src/app/shared/MES/pdcdgr.service';

@Component({
  selector: 'app-pdcdgr-info',
  templateUrl: './pdcdgr-info.component.html',
  styleUrls: ['./pdcdgr-info.component.css']
})
export class pdcdgrInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public pdcdgrService: pdcdgrService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.pdcdgrService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.pdcdgrSearch();
  }
  pdcdgrSearch() {
    this.pdcdgrService.GetByIDAsync().subscribe(
      res => {
        this.pdcdgrService.FormData = res as pdcdgr;
        if (this.pdcdgrService.FormData.CDGR_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  pdcdgrSave() {
    this.pdcdgrService.IsShowLoading = true;
    this.pdcdgrService.SaveAsync().subscribe(
      res => {
        this.pdcdgrService.FormData = res as pdcdgr;
        this.Router.navigateByUrl(environment.pdcdgrInfo + this.pdcdgrService.FormData.CDGR_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.pdcdgrService.IsShowLoading = false;
      }
    );
  }
  pdcdgrAdd() {
    this.Router.navigateByUrl(environment.pdcdgrInfo + environment.InitializationNumber);
    this.pdcdgrService.BaseParameter.ID = environment.InitializationNumber;
    this.pdcdgrSearch();
  }
}

