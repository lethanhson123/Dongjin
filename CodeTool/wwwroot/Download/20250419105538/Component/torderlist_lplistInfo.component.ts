import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torderlist_lplist } from 'src/app/shared/MES/torderlist_lplist.model';
import { torderlist_lplistService } from 'src/app/shared/MES/torderlist_lplist.service';

@Component({
  selector: 'app-torderlist_lplist-info',
  templateUrl: './torderlist_lplist-info.component.html',
  styleUrls: ['./torderlist_lplist-info.component.css']
})
export class torderlist_lplistInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torderlist_lplistService: torderlist_lplistService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torderlist_lplistService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.torderlist_lplistSearch();
  }
  torderlist_lplistSearch() {
    this.torderlist_lplistService.GetByIDAsync().subscribe(
      res => {
        this.torderlist_lplistService.FormData = res as torderlist_lplist;
        if (this.torderlist_lplistService.FormData.TORDERLIST_LPLIST_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  torderlist_lplistSave() {
    this.torderlist_lplistService.IsShowLoading = true;
    this.torderlist_lplistService.SaveAsync().subscribe(
      res => {
        this.torderlist_lplistService.FormData = res as torderlist_lplist;
        this.Router.navigateByUrl(environment.torderlist_lplistInfo + this.torderlist_lplistService.FormData.TORDERLIST_LPLIST_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.torderlist_lplistService.IsShowLoading = false;
      }
    );
  }
  torderlist_lplistAdd() {
    this.Router.navigateByUrl(environment.torderlist_lplistInfo + environment.InitializationNumber);
    this.torderlist_lplistService.BaseParameter.ID = environment.InitializationNumber;
    this.torderlist_lplistSearch();
  }
}

