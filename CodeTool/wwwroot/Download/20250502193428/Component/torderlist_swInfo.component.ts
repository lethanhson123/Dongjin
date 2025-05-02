import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torderlist_sw } from 'src/app/shared/MES/torderlist_sw.model';
import { torderlist_swService } from 'src/app/shared/MES/torderlist_sw.service';

@Component({
  selector: 'app-torderlist_sw-info',
  templateUrl: './torderlist_sw-info.component.html',
  styleUrls: ['./torderlist_sw-info.component.css']
})
export class torderlist_swInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torderlist_swService: torderlist_swService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torderlist_swService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.torderlist_swSearch();
  }
  torderlist_swSearch() {
    this.torderlist_swService.GetByIDAsync().subscribe(
      res => {
        this.torderlist_swService.FormData = res as torderlist_sw;
        if (this.torderlist_swService.FormData.ORDER_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  torderlist_swSave() {
    this.torderlist_swService.IsShowLoading = true;
    this.torderlist_swService.SaveAsync().subscribe(
      res => {
        this.torderlist_swService.FormData = res as torderlist_sw;
        this.Router.navigateByUrl(environment.torderlist_swInfo + this.torderlist_swService.FormData.ORDER_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.torderlist_swService.IsShowLoading = false;
      }
    );
  }
  torderlist_swAdd() {
    this.Router.navigateByUrl(environment.torderlist_swInfo + environment.InitializationNumber);
    this.torderlist_swService.BaseParameter.ID = environment.InitializationNumber;
    this.torderlist_swSearch();
  }
}

