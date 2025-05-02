import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { pdpart_addlist } from 'src/app/shared/MES/pdpart_addlist.model';
import { pdpart_addlistService } from 'src/app/shared/MES/pdpart_addlist.service';

@Component({
  selector: 'app-pdpart_addlist-info',
  templateUrl: './pdpart_addlist-info.component.html',
  styleUrls: ['./pdpart_addlist-info.component.css']
})
export class pdpart_addlistInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public pdpart_addlistService: pdpart_addlistService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.pdpart_addlistService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.pdpart_addlistSearch();
  }
  pdpart_addlistSearch() {
    this.pdpart_addlistService.GetByIDAsync().subscribe(
      res => {
        this.pdpart_addlistService.FormData = res as pdpart_addlist;
        if (this.pdpart_addlistService.FormData.PDPART_AL_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  pdpart_addlistSave() {
    this.pdpart_addlistService.IsShowLoading = true;
    this.pdpart_addlistService.SaveAsync().subscribe(
      res => {
        this.pdpart_addlistService.FormData = res as pdpart_addlist;
        this.Router.navigateByUrl(environment.pdpart_addlistInfo + this.pdpart_addlistService.FormData.PDPART_AL_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.pdpart_addlistService.IsShowLoading = false;
      }
    );
  }
  pdpart_addlistAdd() {
    this.Router.navigateByUrl(environment.pdpart_addlistInfo + environment.InitializationNumber);
    this.pdpart_addlistService.BaseParameter.ID = environment.InitializationNumber;
    this.pdpart_addlistSearch();
  }
}

