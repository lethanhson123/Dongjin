import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torder_bom_spst1 } from 'src/app/shared/MES/torder_bom_spst1.model';
import { torder_bom_spst1Service } from 'src/app/shared/MES/torder_bom_spst1.service';

@Component({
  selector: 'app-torder_bom_spst1-info',
  templateUrl: './torder_bom_spst1-info.component.html',
  styleUrls: ['./torder_bom_spst1-info.component.css']
})
export class torder_bom_spst1InfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torder_bom_spst1Service: torder_bom_spst1Service,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torder_bom_spst1Service.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.torder_bom_spst1Search();
  }
  torder_bom_spst1Search() {
    this.torder_bom_spst1Service.GetByIDAsync().subscribe(
      res => {
        this.torder_bom_spst1Service.FormData = res as torder_bom_spst1;
        if (this.torder_bom_spst1Service.FormData.TORDER_BOMSPST_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  torder_bom_spst1Save() {
    this.torder_bom_spst1Service.IsShowLoading = true;
    this.torder_bom_spst1Service.SaveAsync().subscribe(
      res => {
        this.torder_bom_spst1Service.FormData = res as torder_bom_spst1;
        this.Router.navigateByUrl(environment.torder_bom_spst1Info + this.torder_bom_spst1Service.FormData.TORDER_BOMSPST_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.torder_bom_spst1Service.IsShowLoading = false;
      }
    );
  }
  torder_bom_spst1Add() {
    this.Router.navigateByUrl(environment.torder_bom_spst1Info + environment.InitializationNumber);
    this.torder_bom_spst1Service.BaseParameter.ID = environment.InitializationNumber;
    this.torder_bom_spst1Search();
  }
}

