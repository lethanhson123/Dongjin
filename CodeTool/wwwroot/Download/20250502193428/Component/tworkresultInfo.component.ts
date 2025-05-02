import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tworkresult } from 'src/app/shared/MES/tworkresult.model';
import { tworkresultService } from 'src/app/shared/MES/tworkresult.service';

@Component({
  selector: 'app-tworkresult-info',
  templateUrl: './tworkresult-info.component.html',
  styleUrls: ['./tworkresult-info.component.css']
})
export class tworkresultInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tworkresultService: tworkresultService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tworkresultService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tworkresultSearch();
  }
  tworkresultSearch() {
    this.tworkresultService.GetByIDAsync().subscribe(
      res => {
        this.tworkresultService.FormData = res as tworkresult;
        if (this.tworkresultService.FormData.WORK_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tworkresultSave() {
    this.tworkresultService.IsShowLoading = true;
    this.tworkresultService.SaveAsync().subscribe(
      res => {
        this.tworkresultService.FormData = res as tworkresult;
        this.Router.navigateByUrl(environment.tworkresultInfo + this.tworkresultService.FormData.WORK_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tworkresultService.IsShowLoading = false;
      }
    );
  }
  tworkresultAdd() {
    this.Router.navigateByUrl(environment.tworkresultInfo + environment.InitializationNumber);
    this.tworkresultService.BaseParameter.ID = environment.InitializationNumber;
    this.tworkresultSearch();
  }
}

