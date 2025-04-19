import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsbom_ver02_tmp1 } from 'src/app/shared/MES/tsbom_ver02_tmp1.model';
import { tsbom_ver02_tmp1Service } from 'src/app/shared/MES/tsbom_ver02_tmp1.service';

@Component({
  selector: 'app-tsbom_ver02_tmp1-info',
  templateUrl: './tsbom_ver02_tmp1-info.component.html',
  styleUrls: ['./tsbom_ver02_tmp1-info.component.css']
})
export class tsbom_ver02_tmp1InfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsbom_ver02_tmp1Service: tsbom_ver02_tmp1Service,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsbom_ver02_tmp1Service.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tsbom_ver02_tmp1Search();
  }
  tsbom_ver02_tmp1Search() {
    this.tsbom_ver02_tmp1Service.GetByIDAsync().subscribe(
      res => {
        this.tsbom_ver02_tmp1Service.FormData = res as tsbom_ver02_tmp1;
        if (this.tsbom_ver02_tmp1Service.FormData.BOM_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tsbom_ver02_tmp1Save() {
    this.tsbom_ver02_tmp1Service.IsShowLoading = true;
    this.tsbom_ver02_tmp1Service.SaveAsync().subscribe(
      res => {
        this.tsbom_ver02_tmp1Service.FormData = res as tsbom_ver02_tmp1;
        this.Router.navigateByUrl(environment.tsbom_ver02_tmp1Info + this.tsbom_ver02_tmp1Service.FormData.BOM_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tsbom_ver02_tmp1Service.IsShowLoading = false;
      }
    );
  }
  tsbom_ver02_tmp1Add() {
    this.Router.navigateByUrl(environment.tsbom_ver02_tmp1Info + environment.InitializationNumber);
    this.tsbom_ver02_tmp1Service.BaseParameter.ID = environment.InitializationNumber;
    this.tsbom_ver02_tmp1Search();
  }
}

