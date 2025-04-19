import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsnon_worktime } from 'src/app/shared/MES/tsnon_worktime.model';
import { tsnon_worktimeService } from 'src/app/shared/MES/tsnon_worktime.service';

@Component({
  selector: 'app-tsnon_worktime-info',
  templateUrl: './tsnon_worktime-info.component.html',
  styleUrls: ['./tsnon_worktime-info.component.css']
})
export class tsnon_worktimeInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsnon_worktimeService: tsnon_worktimeService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsnon_worktimeService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tsnon_worktimeSearch();
  }
  tsnon_worktimeSearch() {
    this.tsnon_worktimeService.GetByIDAsync().subscribe(
      res => {
        this.tsnon_worktimeService.FormData = res as tsnon_worktime;
        if (this.tsnon_worktimeService.FormData.TSNON_WT_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tsnon_worktimeSave() {
    this.tsnon_worktimeService.IsShowLoading = true;
    this.tsnon_worktimeService.SaveAsync().subscribe(
      res => {
        this.tsnon_worktimeService.FormData = res as tsnon_worktime;
        this.Router.navigateByUrl(environment.tsnon_worktimeInfo + this.tsnon_worktimeService.FormData.TSNON_WT_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tsnon_worktimeService.IsShowLoading = false;
      }
    );
  }
  tsnon_worktimeAdd() {
    this.Router.navigateByUrl(environment.tsnon_worktimeInfo + environment.InitializationNumber);
    this.tsnon_worktimeService.BaseParameter.ID = environment.InitializationNumber;
    this.tsnon_worktimeSearch();
  }
}

