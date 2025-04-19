import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { pd_asset_mm } from 'src/app/shared/MES/pd_asset_mm.model';
import { pd_asset_mmService } from 'src/app/shared/MES/pd_asset_mm.service';

@Component({
  selector: 'app-pd_asset_mm-info',
  templateUrl: './pd_asset_mm-info.component.html',
  styleUrls: ['./pd_asset_mm-info.component.css']
})
export class pd_asset_mmInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public pd_asset_mmService: pd_asset_mmService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.pd_asset_mmService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.pd_asset_mmSearch();
  }
  pd_asset_mmSearch() {
    this.pd_asset_mmService.GetByIDAsync().subscribe(
      res => {
        this.pd_asset_mmService.FormData = res as pd_asset_mm;
        if (this.pd_asset_mmService.FormData.PD_ASSET_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  pd_asset_mmSave() {
    this.pd_asset_mmService.IsShowLoading = true;
    this.pd_asset_mmService.SaveAsync().subscribe(
      res => {
        this.pd_asset_mmService.FormData = res as pd_asset_mm;
        this.Router.navigateByUrl(environment.pd_asset_mmInfo + this.pd_asset_mmService.FormData.PD_ASSET_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.pd_asset_mmService.IsShowLoading = false;
      }
    );
  }
  pd_asset_mmAdd() {
    this.Router.navigateByUrl(environment.pd_asset_mmInfo + environment.InitializationNumber);
    this.pd_asset_mmService.BaseParameter.ID = environment.InitializationNumber;
    this.pd_asset_mmSearch();
  }
}

