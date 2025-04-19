import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsmnau } from 'src/app/shared/MES/tsmnau.model';
import { tsmnauService } from 'src/app/shared/MES/tsmnau.service';

@Component({
  selector: 'app-tsmnau-info',
  templateUrl: './tsmnau-info.component.html',
  styleUrls: ['./tsmnau-info.component.css']
})
export class tsmnauInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsmnauService: tsmnauService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsmnauService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tsmnauSearch();
  }
  tsmnauSearch() {
    this.tsmnauService.GetByIDAsync().subscribe(
      res => {
        this.tsmnauService.FormData = res as tsmnau;
        if (this.tsmnauService.FormData.MENU_AUTH_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tsmnauSave() {
    this.tsmnauService.IsShowLoading = true;
    this.tsmnauService.SaveAsync().subscribe(
      res => {
        this.tsmnauService.FormData = res as tsmnau;
        this.Router.navigateByUrl(environment.tsmnauInfo + this.tsmnauService.FormData.MENU_AUTH_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tsmnauService.IsShowLoading = false;
      }
    );
  }
  tsmnauAdd() {
    this.Router.navigateByUrl(environment.tsmnauInfo + environment.InitializationNumber);
    this.tsmnauService.BaseParameter.ID = environment.InitializationNumber;
    this.tsmnauSearch();
  }
}

