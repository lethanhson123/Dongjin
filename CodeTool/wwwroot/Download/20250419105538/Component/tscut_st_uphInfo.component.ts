import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tscut_st_uph } from 'src/app/shared/MES/tscut_st_uph.model';
import { tscut_st_uphService } from 'src/app/shared/MES/tscut_st_uph.service';

@Component({
  selector: 'app-tscut_st_uph-info',
  templateUrl: './tscut_st_uph-info.component.html',
  styleUrls: ['./tscut_st_uph-info.component.css']
})
export class tscut_st_uphInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tscut_st_uphService: tscut_st_uphService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tscut_st_uphService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tscut_st_uphSearch();
  }
  tscut_st_uphSearch() {
    this.tscut_st_uphService.GetByIDAsync().subscribe(
      res => {
        this.tscut_st_uphService.FormData = res as tscut_st_uph;
        if (this.tscut_st_uphService.FormData.TSCUT_ST_UPH_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tscut_st_uphSave() {
    this.tscut_st_uphService.IsShowLoading = true;
    this.tscut_st_uphService.SaveAsync().subscribe(
      res => {
        this.tscut_st_uphService.FormData = res as tscut_st_uph;
        this.Router.navigateByUrl(environment.tscut_st_uphInfo + this.tscut_st_uphService.FormData.TSCUT_ST_UPH_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tscut_st_uphService.IsShowLoading = false;
      }
    );
  }
  tscut_st_uphAdd() {
    this.Router.navigateByUrl(environment.tscut_st_uphInfo + environment.InitializationNumber);
    this.tscut_st_uphService.BaseParameter.ID = environment.InitializationNumber;
    this.tscut_st_uphSearch();
  }
}

