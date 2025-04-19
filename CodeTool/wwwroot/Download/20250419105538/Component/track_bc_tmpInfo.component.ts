import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { track_bc_tmp } from 'src/app/shared/MES/track_bc_tmp.model';
import { track_bc_tmpService } from 'src/app/shared/MES/track_bc_tmp.service';

@Component({
  selector: 'app-track_bc_tmp-info',
  templateUrl: './track_bc_tmp-info.component.html',
  styleUrls: ['./track_bc_tmp-info.component.css']
})
export class track_bc_tmpInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public track_bc_tmpService: track_bc_tmpService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.track_bc_tmpService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.track_bc_tmpSearch();
  }
  track_bc_tmpSearch() {
    this.track_bc_tmpService.GetByIDAsync().subscribe(
      res => {
        this.track_bc_tmpService.FormData = res as track_bc_tmp;
        if (this.track_bc_tmpService.FormData.TRACK_BC_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  track_bc_tmpSave() {
    this.track_bc_tmpService.IsShowLoading = true;
    this.track_bc_tmpService.SaveAsync().subscribe(
      res => {
        this.track_bc_tmpService.FormData = res as track_bc_tmp;
        this.Router.navigateByUrl(environment.track_bc_tmpInfo + this.track_bc_tmpService.FormData.TRACK_BC_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.track_bc_tmpService.IsShowLoading = false;
      }
    );
  }
  track_bc_tmpAdd() {
    this.Router.navigateByUrl(environment.track_bc_tmpInfo + environment.InitializationNumber);
    this.track_bc_tmpService.BaseParameter.ID = environment.InitializationNumber;
    this.track_bc_tmpSearch();
  }
}

