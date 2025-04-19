import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsbom_list } from 'src/app/shared/MES/tsbom_list.model';
import { tsbom_listService } from 'src/app/shared/MES/tsbom_list.service';

@Component({
  selector: 'app-tsbom_list-info',
  templateUrl: './tsbom_list-info.component.html',
  styleUrls: ['./tsbom_list-info.component.css']
})
export class tsbom_listInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsbom_listService: tsbom_listService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsbom_listService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tsbom_listSearch();
  }
  tsbom_listSearch() {
    this.tsbom_listService.GetByIDAsync().subscribe(
      res => {
        this.tsbom_listService.FormData = res as tsbom_list;
        if (this.tsbom_listService.FormData.BOM_LIST_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tsbom_listSave() {
    this.tsbom_listService.IsShowLoading = true;
    this.tsbom_listService.SaveAsync().subscribe(
      res => {
        this.tsbom_listService.FormData = res as tsbom_list;
        this.Router.navigateByUrl(environment.tsbom_listInfo + this.tsbom_listService.FormData.BOM_LIST_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tsbom_listService.IsShowLoading = false;
      }
    );
  }
  tsbom_listAdd() {
    this.Router.navigateByUrl(environment.tsbom_listInfo + environment.InitializationNumber);
    this.tsbom_listService.BaseParameter.ID = environment.InitializationNumber;
    this.tsbom_listSearch();
  }
}

