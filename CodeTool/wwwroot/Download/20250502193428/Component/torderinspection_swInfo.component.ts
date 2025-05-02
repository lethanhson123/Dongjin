import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torderinspection_sw } from 'src/app/shared/MES/torderinspection_sw.model';
import { torderinspection_swService } from 'src/app/shared/MES/torderinspection_sw.service';

@Component({
  selector: 'app-torderinspection_sw-info',
  templateUrl: './torderinspection_sw-info.component.html',
  styleUrls: ['./torderinspection_sw-info.component.css']
})
export class torderinspection_swInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torderinspection_swService: torderinspection_swService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torderinspection_swService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.torderinspection_swSearch();
  }
  torderinspection_swSearch() {
    this.torderinspection_swService.GetByIDAsync().subscribe(
      res => {
        this.torderinspection_swService.FormData = res as torderinspection_sw;
        if (this.torderinspection_swService.FormData.INSPECTION_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  torderinspection_swSave() {
    this.torderinspection_swService.IsShowLoading = true;
    this.torderinspection_swService.SaveAsync().subscribe(
      res => {
        this.torderinspection_swService.FormData = res as torderinspection_sw;
        this.Router.navigateByUrl(environment.torderinspection_swInfo + this.torderinspection_swService.FormData.INSPECTION_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.torderinspection_swService.IsShowLoading = false;
      }
    );
  }
  torderinspection_swAdd() {
    this.Router.navigateByUrl(environment.torderinspection_swInfo + environment.InitializationNumber);
    this.torderinspection_swService.BaseParameter.ID = environment.InitializationNumber;
    this.torderinspection_swSearch();
  }
}

