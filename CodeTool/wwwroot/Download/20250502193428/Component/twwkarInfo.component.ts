import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { twwkar } from 'src/app/shared/MES/twwkar.model';
import { twwkarService } from 'src/app/shared/MES/twwkar.service';

@Component({
  selector: 'app-twwkar-info',
  templateUrl: './twwkar-info.component.html',
  styleUrls: ['./twwkar-info.component.css']
})
export class twwkarInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public twwkarService: twwkarService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.twwkarService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.twwkarSearch();
  }
  twwkarSearch() {
    this.twwkarService.GetByIDAsync().subscribe(
      res => {
        this.twwkarService.FormData = res as twwkar;
        if (this.twwkarService.FormData.WK_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  twwkarSave() {
    this.twwkarService.IsShowLoading = true;
    this.twwkarService.SaveAsync().subscribe(
      res => {
        this.twwkarService.FormData = res as twwkar;
        this.Router.navigateByUrl(environment.twwkarInfo + this.twwkarService.FormData.WK_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.twwkarService.IsShowLoading = false;
      }
    );
  }
  twwkarAdd() {
    this.Router.navigateByUrl(environment.twwkarInfo + environment.InitializationNumber);
    this.twwkarService.BaseParameter.ID = environment.InitializationNumber;
    this.twwkarSearch();
  }
}

