import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { trackmtim } from 'src/app/shared/MES/trackmtim.model';
import { trackmtimService } from 'src/app/shared/MES/trackmtim.service';

@Component({
  selector: 'app-trackmtim-info',
  templateUrl: './trackmtim-info.component.html',
  styleUrls: ['./trackmtim-info.component.css']
})
export class trackmtimInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public trackmtimService: trackmtimService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.trackmtimService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.trackmtimSearch();
  }
  trackmtimSearch() {
    this.trackmtimService.GetByIDAsync().subscribe(
      res => {
        this.trackmtimService.FormData = res as trackmtim;
        if (this.trackmtimService.FormData.TRACK_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  trackmtimSave() {
    this.trackmtimService.IsShowLoading = true;
    this.trackmtimService.SaveAsync().subscribe(
      res => {
        this.trackmtimService.FormData = res as trackmtim;
        this.Router.navigateByUrl(environment.trackmtimInfo + this.trackmtimService.FormData.TRACK_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.trackmtimService.IsShowLoading = false;
      }
    );
  }
  trackmtimAdd() {
    this.Router.navigateByUrl(environment.trackmtimInfo + environment.InitializationNumber);
    this.trackmtimService.BaseParameter.ID = environment.InitializationNumber;
    this.trackmtimSearch();
  }
}

