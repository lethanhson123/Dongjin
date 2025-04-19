import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torder_spc } from 'src/app/shared/MES/torder_spc.model';
import { torder_spcService } from 'src/app/shared/MES/torder_spc.service';

@Component({
  selector: 'app-torder_spc-info',
  templateUrl: './torder_spc-info.component.html',
  styleUrls: ['./torder_spc-info.component.css']
})
export class torder_spcInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torder_spcService: torder_spcService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torder_spcService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.torder_spcSearch();
  }
  torder_spcSearch() {
    this.torder_spcService.GetByIDAsync().subscribe(
      res => {
        this.torder_spcService.FormData = res as torder_spc;
        if (this.torder_spcService.FormData.SPC_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  torder_spcSave() {
    this.torder_spcService.IsShowLoading = true;
    this.torder_spcService.SaveAsync().subscribe(
      res => {
        this.torder_spcService.FormData = res as torder_spc;
        this.Router.navigateByUrl(environment.torder_spcInfo + this.torder_spcService.FormData.SPC_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.torder_spcService.IsShowLoading = false;
      }
    );
  }
  torder_spcAdd() {
    this.Router.navigateByUrl(environment.torder_spcInfo + environment.InitializationNumber);
    this.torder_spcService.BaseParameter.ID = environment.InitializationNumber;
    this.torder_spcSearch();
  }
}

