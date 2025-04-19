import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsuser } from 'src/app/shared/MES/tsuser.model';
import { tsuserService } from 'src/app/shared/MES/tsuser.service';

@Component({
  selector: 'app-tsuser-info',
  templateUrl: './tsuser-info.component.html',
  styleUrls: ['./tsuser-info.component.css']
})
export class tsuserInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsuserService: tsuserService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsuserService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tsuserSearch();
  }
  tsuserSearch() {
    this.tsuserService.GetByIDAsync().subscribe(
      res => {
        this.tsuserService.FormData = res as tsuser;
        if (this.tsuserService.FormData.USER_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tsuserSave() {
    this.tsuserService.IsShowLoading = true;
    this.tsuserService.SaveAsync().subscribe(
      res => {
        this.tsuserService.FormData = res as tsuser;
        this.Router.navigateByUrl(environment.tsuserInfo + this.tsuserService.FormData.USER_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tsuserService.IsShowLoading = false;
      }
    );
  }
  tsuserAdd() {
    this.Router.navigateByUrl(environment.tsuserInfo + environment.InitializationNumber);
    this.tsuserService.BaseParameter.ID = environment.InitializationNumber;
    this.tsuserSearch();
  }
}

