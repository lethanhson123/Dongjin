import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsurau } from 'src/app/shared/MES/tsurau.model';
import { tsurauService } from 'src/app/shared/MES/tsurau.service';

@Component({
  selector: 'app-tsurau-info',
  templateUrl: './tsurau-info.component.html',
  styleUrls: ['./tsurau-info.component.css']
})
export class tsurauInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsurauService: tsurauService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsurauService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tsurauSearch();
  }
  tsurauSearch() {
    this.tsurauService.GetByIDAsync().subscribe(
      res => {
        this.tsurauService.FormData = res as tsurau;
        if (this.tsurauService.FormData.USER_AUTH_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tsurauSave() {
    this.tsurauService.IsShowLoading = true;
    this.tsurauService.SaveAsync().subscribe(
      res => {
        this.tsurauService.FormData = res as tsurau;
        this.Router.navigateByUrl(environment.tsurauInfo + this.tsurauService.FormData.USER_AUTH_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tsurauService.IsShowLoading = false;
      }
    );
  }
  tsurauAdd() {
    this.Router.navigateByUrl(environment.tsurauInfo + environment.InitializationNumber);
    this.tsurauService.BaseParameter.ID = environment.InitializationNumber;
    this.tsurauSearch();
  }
}

