import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torderlist } from 'src/app/shared/MES/torderlist.model';
import { torderlistService } from 'src/app/shared/MES/torderlist.service';

@Component({
  selector: 'app-torderlist-info',
  templateUrl: './torderlist-info.component.html',
  styleUrls: ['./torderlist-info.component.css']
})
export class torderlistInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torderlistService: torderlistService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torderlistService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.torderlistSearch();
  }
  torderlistSearch() {
    this.torderlistService.GetByIDAsync().subscribe(
      res => {
        this.torderlistService.FormData = res as torderlist;
        if (this.torderlistService.FormData.ORDER_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  torderlistSave() {
    this.torderlistService.IsShowLoading = true;
    this.torderlistService.SaveAsync().subscribe(
      res => {
        this.torderlistService.FormData = res as torderlist;
        this.Router.navigateByUrl(environment.torderlistInfo + this.torderlistService.FormData.ORDER_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.torderlistService.IsShowLoading = false;
      }
    );
  }
  torderlistAdd() {
    this.Router.navigateByUrl(environment.torderlistInfo + environment.InitializationNumber);
    this.torderlistService.BaseParameter.ID = environment.InitializationNumber;
    this.torderlistSearch();
  }
}

