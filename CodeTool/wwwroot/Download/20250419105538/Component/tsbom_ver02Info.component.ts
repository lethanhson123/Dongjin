import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsbom_ver02 } from 'src/app/shared/MES/tsbom_ver02.model';
import { tsbom_ver02Service } from 'src/app/shared/MES/tsbom_ver02.service';

@Component({
  selector: 'app-tsbom_ver02-info',
  templateUrl: './tsbom_ver02-info.component.html',
  styleUrls: ['./tsbom_ver02-info.component.css']
})
export class tsbom_ver02InfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsbom_ver02Service: tsbom_ver02Service,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsbom_ver02Service.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tsbom_ver02Search();
  }
  tsbom_ver02Search() {
    this.tsbom_ver02Service.GetByIDAsync().subscribe(
      res => {
        this.tsbom_ver02Service.FormData = res as tsbom_ver02;
        if (this.tsbom_ver02Service.FormData.BOM_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tsbom_ver02Save() {
    this.tsbom_ver02Service.IsShowLoading = true;
    this.tsbom_ver02Service.SaveAsync().subscribe(
      res => {
        this.tsbom_ver02Service.FormData = res as tsbom_ver02;
        this.Router.navigateByUrl(environment.tsbom_ver02Info + this.tsbom_ver02Service.FormData.BOM_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tsbom_ver02Service.IsShowLoading = false;
      }
    );
  }
  tsbom_ver02Add() {
    this.Router.navigateByUrl(environment.tsbom_ver02Info + environment.InitializationNumber);
    this.tsbom_ver02Service.BaseParameter.ID = environment.InitializationNumber;
    this.tsbom_ver02Search();
  }
}

