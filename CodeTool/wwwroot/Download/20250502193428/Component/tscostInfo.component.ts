import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tscost } from 'src/app/shared/MES/tscost.model';
import { tscostService } from 'src/app/shared/MES/tscost.service';

@Component({
  selector: 'app-tscost-info',
  templateUrl: './tscost-info.component.html',
  styleUrls: ['./tscost-info.component.css']
})
export class tscostInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tscostService: tscostService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tscostService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tscostSearch();
  }
  tscostSearch() {
    this.tscostService.GetByIDAsync().subscribe(
      res => {
        this.tscostService.FormData = res as tscost;
        if (this.tscostService.FormData.TSCOST_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tscostSave() {
    this.tscostService.IsShowLoading = true;
    this.tscostService.SaveAsync().subscribe(
      res => {
        this.tscostService.FormData = res as tscost;
        this.Router.navigateByUrl(environment.tscostInfo + this.tscostService.FormData.TSCOST_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tscostService.IsShowLoading = false;
      }
    );
  }
  tscostAdd() {
    this.Router.navigateByUrl(environment.tscostInfo + environment.InitializationNumber);
    this.tscostService.BaseParameter.ID = environment.InitializationNumber;
    this.tscostSearch();
  }
}

