import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torderlist_work } from 'src/app/shared/MES/torderlist_work.model';
import { torderlist_workService } from 'src/app/shared/MES/torderlist_work.service';

@Component({
  selector: 'app-torderlist_work-info',
  templateUrl: './torderlist_work-info.component.html',
  styleUrls: ['./torderlist_work-info.component.css']
})
export class torderlist_workInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torderlist_workService: torderlist_workService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torderlist_workService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.torderlist_workSearch();
  }
  torderlist_workSearch() {
    this.torderlist_workService.GetByIDAsync().subscribe(
      res => {
        this.torderlist_workService.FormData = res as torderlist_work;
        if (this.torderlist_workService.FormData.TORDERLIST_WORK_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  torderlist_workSave() {
    this.torderlist_workService.IsShowLoading = true;
    this.torderlist_workService.SaveAsync().subscribe(
      res => {
        this.torderlist_workService.FormData = res as torderlist_work;
        this.Router.navigateByUrl(environment.torderlist_workInfo + this.torderlist_workService.FormData.TORDERLIST_WORK_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.torderlist_workService.IsShowLoading = false;
      }
    );
  }
  torderlist_workAdd() {
    this.Router.navigateByUrl(environment.torderlist_workInfo + environment.InitializationNumber);
    this.torderlist_workService.BaseParameter.ID = environment.InitializationNumber;
    this.torderlist_workSearch();
  }
}

