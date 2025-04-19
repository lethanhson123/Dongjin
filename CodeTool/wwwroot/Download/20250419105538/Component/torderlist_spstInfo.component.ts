import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torderlist_spst } from 'src/app/shared/MES/torderlist_spst.model';
import { torderlist_spstService } from 'src/app/shared/MES/torderlist_spst.service';

@Component({
  selector: 'app-torderlist_spst-info',
  templateUrl: './torderlist_spst-info.component.html',
  styleUrls: ['./torderlist_spst-info.component.css']
})
export class torderlist_spstInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torderlist_spstService: torderlist_spstService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torderlist_spstService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.torderlist_spstSearch();
  }
  torderlist_spstSearch() {
    this.torderlist_spstService.GetByIDAsync().subscribe(
      res => {
        this.torderlist_spstService.FormData = res as torderlist_spst;
        if (this.torderlist_spstService.FormData.ORDER_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  torderlist_spstSave() {
    this.torderlist_spstService.IsShowLoading = true;
    this.torderlist_spstService.SaveAsync().subscribe(
      res => {
        this.torderlist_spstService.FormData = res as torderlist_spst;
        this.Router.navigateByUrl(environment.torderlist_spstInfo + this.torderlist_spstService.FormData.ORDER_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.torderlist_spstService.IsShowLoading = false;
      }
    );
  }
  torderlist_spstAdd() {
    this.Router.navigateByUrl(environment.torderlist_spstInfo + environment.InitializationNumber);
    this.torderlist_spstService.BaseParameter.ID = environment.InitializationNumber;
    this.torderlist_spstSearch();
  }
}

