import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsyear_group_inv_hist } from 'src/app/shared/MES/tsyear_group_inv_hist.model';
import { tsyear_group_inv_histService } from 'src/app/shared/MES/tsyear_group_inv_hist.service';

@Component({
  selector: 'app-tsyear_group_inv_hist-info',
  templateUrl: './tsyear_group_inv_hist-info.component.html',
  styleUrls: ['./tsyear_group_inv_hist-info.component.css']
})
export class tsyear_group_inv_histInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsyear_group_inv_histService: tsyear_group_inv_histService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsyear_group_inv_histService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tsyear_group_inv_histSearch();
  }
  tsyear_group_inv_histSearch() {
    this.tsyear_group_inv_histService.GetByIDAsync().subscribe(
      res => {
        this.tsyear_group_inv_histService.FormData = res as tsyear_group_inv_hist;
        if (this.tsyear_group_inv_histService.FormData.TSYEAR_GROUP_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tsyear_group_inv_histSave() {
    this.tsyear_group_inv_histService.IsShowLoading = true;
    this.tsyear_group_inv_histService.SaveAsync().subscribe(
      res => {
        this.tsyear_group_inv_histService.FormData = res as tsyear_group_inv_hist;
        this.Router.navigateByUrl(environment.tsyear_group_inv_histInfo + this.tsyear_group_inv_histService.FormData.TSYEAR_GROUP_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tsyear_group_inv_histService.IsShowLoading = false;
      }
    );
  }
  tsyear_group_inv_histAdd() {
    this.Router.navigateByUrl(environment.tsyear_group_inv_histInfo + environment.InitializationNumber);
    this.tsyear_group_inv_histService.BaseParameter.ID = environment.InitializationNumber;
    this.tsyear_group_inv_histSearch();
  }
}

