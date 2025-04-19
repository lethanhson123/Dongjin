import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsauth } from 'src/app/shared/MES/tsauth.model';
import { tsauthService } from 'src/app/shared/MES/tsauth.service';

@Component({
  selector: 'app-tsauth-info',
  templateUrl: './tsauth-info.component.html',
  styleUrls: ['./tsauth-info.component.css']
})
export class tsauthInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsauthService: tsauthService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsauthService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tsauthSearch();
  }
  tsauthSearch() {
    this.tsauthService.GetByIDAsync().subscribe(
      res => {
        this.tsauthService.FormData = res as tsauth;
        if (this.tsauthService.FormData.AUTH_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tsauthSave() {
    this.tsauthService.IsShowLoading = true;
    this.tsauthService.SaveAsync().subscribe(
      res => {
        this.tsauthService.FormData = res as tsauth;
        this.Router.navigateByUrl(environment.tsauthInfo + this.tsauthService.FormData.AUTH_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tsauthService.IsShowLoading = false;
      }
    );
  }
  tsauthAdd() {
    this.Router.navigateByUrl(environment.tsauthInfo + environment.InitializationNumber);
    this.tsauthService.BaseParameter.ID = environment.InitializationNumber;
    this.tsauthSearch();
  }
}

