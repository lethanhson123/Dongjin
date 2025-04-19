import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { twwkar_lp } from 'src/app/shared/MES/twwkar_lp.model';
import { twwkar_lpService } from 'src/app/shared/MES/twwkar_lp.service';

@Component({
  selector: 'app-twwkar_lp-info',
  templateUrl: './twwkar_lp-info.component.html',
  styleUrls: ['./twwkar_lp-info.component.css']
})
export class twwkar_lpInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public twwkar_lpService: twwkar_lpService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.twwkar_lpService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.twwkar_lpSearch();
  }
  twwkar_lpSearch() {
    this.twwkar_lpService.GetByIDAsync().subscribe(
      res => {
        this.twwkar_lpService.FormData = res as twwkar_lp;
        if (this.twwkar_lpService.FormData.WK_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  twwkar_lpSave() {
    this.twwkar_lpService.IsShowLoading = true;
    this.twwkar_lpService.SaveAsync().subscribe(
      res => {
        this.twwkar_lpService.FormData = res as twwkar_lp;
        this.Router.navigateByUrl(environment.twwkar_lpInfo + this.twwkar_lpService.FormData.WK_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.twwkar_lpService.IsShowLoading = false;
      }
    );
  }
  twwkar_lpAdd() {
    this.Router.navigateByUrl(environment.twwkar_lpInfo + environment.InitializationNumber);
    this.twwkar_lpService.BaseParameter.ID = environment.InitializationNumber;
    this.twwkar_lpSearch();
  }
}

