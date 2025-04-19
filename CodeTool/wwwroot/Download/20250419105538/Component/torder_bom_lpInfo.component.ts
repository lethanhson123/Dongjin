import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torder_bom_lp } from 'src/app/shared/MES/torder_bom_lp.model';
import { torder_bom_lpService } from 'src/app/shared/MES/torder_bom_lp.service';

@Component({
  selector: 'app-torder_bom_lp-info',
  templateUrl: './torder_bom_lp-info.component.html',
  styleUrls: ['./torder_bom_lp-info.component.css']
})
export class torder_bom_lpInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torder_bom_lpService: torder_bom_lpService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torder_bom_lpService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.torder_bom_lpSearch();
  }
  torder_bom_lpSearch() {
    this.torder_bom_lpService.GetByIDAsync().subscribe(
      res => {
        this.torder_bom_lpService.FormData = res as torder_bom_lp;
        if (this.torder_bom_lpService.FormData.TORDER_BOM_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  torder_bom_lpSave() {
    this.torder_bom_lpService.IsShowLoading = true;
    this.torder_bom_lpService.SaveAsync().subscribe(
      res => {
        this.torder_bom_lpService.FormData = res as torder_bom_lp;
        this.Router.navigateByUrl(environment.torder_bom_lpInfo + this.torder_bom_lpService.FormData.TORDER_BOM_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.torder_bom_lpService.IsShowLoading = false;
      }
    );
  }
  torder_bom_lpAdd() {
    this.Router.navigateByUrl(environment.torder_bom_lpInfo + environment.InitializationNumber);
    this.torder_bom_lpService.BaseParameter.ID = environment.InitializationNumber;
    this.torder_bom_lpSearch();
  }
}

