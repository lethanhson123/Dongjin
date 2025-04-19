import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { ttoolmaster2 } from 'src/app/shared/MES/ttoolmaster2.model';
import { ttoolmaster2Service } from 'src/app/shared/MES/ttoolmaster2.service';

@Component({
  selector: 'app-ttoolmaster2-info',
  templateUrl: './ttoolmaster2-info.component.html',
  styleUrls: ['./ttoolmaster2-info.component.css']
})
export class ttoolmaster2InfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public ttoolmaster2Service: ttoolmaster2Service,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.ttoolmaster2Service.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.ttoolmaster2Search();
  }
  ttoolmaster2Search() {
    this.ttoolmaster2Service.GetByIDAsync().subscribe(
      res => {
        this.ttoolmaster2Service.FormData = res as ttoolmaster2;
        if (this.ttoolmaster2Service.FormData.TOOLMASTER_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  ttoolmaster2Save() {
    this.ttoolmaster2Service.IsShowLoading = true;
    this.ttoolmaster2Service.SaveAsync().subscribe(
      res => {
        this.ttoolmaster2Service.FormData = res as ttoolmaster2;
        this.Router.navigateByUrl(environment.ttoolmaster2Info + this.ttoolmaster2Service.FormData.TOOLMASTER_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.ttoolmaster2Service.IsShowLoading = false;
      }
    );
  }
  ttoolmaster2Add() {
    this.Router.navigateByUrl(environment.ttoolmaster2Info + environment.InitializationNumber);
    this.ttoolmaster2Service.BaseParameter.ID = environment.InitializationNumber;
    this.ttoolmaster2Search();
  }
}

