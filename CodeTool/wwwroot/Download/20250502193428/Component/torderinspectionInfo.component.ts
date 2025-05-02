import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torderinspection } from 'src/app/shared/MES/torderinspection.model';
import { torderinspectionService } from 'src/app/shared/MES/torderinspection.service';

@Component({
  selector: 'app-torderinspection-info',
  templateUrl: './torderinspection-info.component.html',
  styleUrls: ['./torderinspection-info.component.css']
})
export class torderinspectionInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torderinspectionService: torderinspectionService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torderinspectionService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.torderinspectionSearch();
  }
  torderinspectionSearch() {
    this.torderinspectionService.GetByIDAsync().subscribe(
      res => {
        this.torderinspectionService.FormData = res as torderinspection;
        if (this.torderinspectionService.FormData.INSPECTION_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  torderinspectionSave() {
    this.torderinspectionService.IsShowLoading = true;
    this.torderinspectionService.SaveAsync().subscribe(
      res => {
        this.torderinspectionService.FormData = res as torderinspection;
        this.Router.navigateByUrl(environment.torderinspectionInfo + this.torderinspectionService.FormData.INSPECTION_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.torderinspectionService.IsShowLoading = false;
      }
    );
  }
  torderinspectionAdd() {
    this.Router.navigateByUrl(environment.torderinspectionInfo + environment.InitializationNumber);
    this.torderinspectionService.BaseParameter.ID = environment.InitializationNumber;
    this.torderinspectionSearch();
  }
}

