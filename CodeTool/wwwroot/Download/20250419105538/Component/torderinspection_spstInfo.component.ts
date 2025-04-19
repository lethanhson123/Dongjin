import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torderinspection_spst } from 'src/app/shared/MES/torderinspection_spst.model';
import { torderinspection_spstService } from 'src/app/shared/MES/torderinspection_spst.service';

@Component({
  selector: 'app-torderinspection_spst-info',
  templateUrl: './torderinspection_spst-info.component.html',
  styleUrls: ['./torderinspection_spst-info.component.css']
})
export class torderinspection_spstInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torderinspection_spstService: torderinspection_spstService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torderinspection_spstService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.torderinspection_spstSearch();
  }
  torderinspection_spstSearch() {
    this.torderinspection_spstService.GetByIDAsync().subscribe(
      res => {
        this.torderinspection_spstService.FormData = res as torderinspection_spst;
        if (this.torderinspection_spstService.FormData.INSPECTION_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  torderinspection_spstSave() {
    this.torderinspection_spstService.IsShowLoading = true;
    this.torderinspection_spstService.SaveAsync().subscribe(
      res => {
        this.torderinspection_spstService.FormData = res as torderinspection_spst;
        this.Router.navigateByUrl(environment.torderinspection_spstInfo + this.torderinspection_spstService.FormData.INSPECTION_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.torderinspection_spstService.IsShowLoading = false;
      }
    );
  }
  torderinspection_spstAdd() {
    this.Router.navigateByUrl(environment.torderinspection_spstInfo + environment.InitializationNumber);
    this.torderinspection_spstService.BaseParameter.ID = environment.InitializationNumber;
    this.torderinspection_spstSearch();
  }
}

