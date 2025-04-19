import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tspart } from 'src/app/shared/MES/tspart.model';
import { tspartService } from 'src/app/shared/MES/tspart.service';

@Component({
  selector: 'app-tspart-info',
  templateUrl: './tspart-info.component.html',
  styleUrls: ['./tspart-info.component.css']
})
export class tspartInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tspartService: tspartService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tspartService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tspartSearch();
  }
  tspartSearch() {
    this.tspartService.GetByIDAsync().subscribe(
      res => {
        this.tspartService.FormData = res as tspart;
        if (this.tspartService.FormData.PART_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tspartSave() {
    this.tspartService.IsShowLoading = true;
    this.tspartService.SaveAsync().subscribe(
      res => {
        this.tspartService.FormData = res as tspart;
        this.Router.navigateByUrl(environment.tspartInfo + this.tspartService.FormData.PART_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tspartService.IsShowLoading = false;
      }
    );
  }
  tspartAdd() {
    this.Router.navigateByUrl(environment.tspartInfo + environment.InitializationNumber);
    this.tspartService.BaseParameter.ID = environment.InitializationNumber;
    this.tspartSearch();
  }
}

