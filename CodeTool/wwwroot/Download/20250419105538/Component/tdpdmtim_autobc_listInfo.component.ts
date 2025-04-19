import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tdpdmtim_autobc_list } from 'src/app/shared/MES/tdpdmtim_autobc_list.model';
import { tdpdmtim_autobc_listService } from 'src/app/shared/MES/tdpdmtim_autobc_list.service';

@Component({
  selector: 'app-tdpdmtim_autobc_list-info',
  templateUrl: './tdpdmtim_autobc_list-info.component.html',
  styleUrls: ['./tdpdmtim_autobc_list-info.component.css']
})
export class tdpdmtim_autobc_listInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tdpdmtim_autobc_listService: tdpdmtim_autobc_listService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tdpdmtim_autobc_listService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tdpdmtim_autobc_listSearch();
  }
  tdpdmtim_autobc_listSearch() {
    this.tdpdmtim_autobc_listService.GetByIDAsync().subscribe(
      res => {
        this.tdpdmtim_autobc_listService.FormData = res as tdpdmtim_autobc_list;
        if (this.tdpdmtim_autobc_listService.FormData.PDMTINABC_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tdpdmtim_autobc_listSave() {
    this.tdpdmtim_autobc_listService.IsShowLoading = true;
    this.tdpdmtim_autobc_listService.SaveAsync().subscribe(
      res => {
        this.tdpdmtim_autobc_listService.FormData = res as tdpdmtim_autobc_list;
        this.Router.navigateByUrl(environment.tdpdmtim_autobc_listInfo + this.tdpdmtim_autobc_listService.FormData.PDMTINABC_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tdpdmtim_autobc_listService.IsShowLoading = false;
      }
    );
  }
  tdpdmtim_autobc_listAdd() {
    this.Router.navigateByUrl(environment.tdpdmtim_autobc_listInfo + environment.InitializationNumber);
    this.tdpdmtim_autobc_listService.BaseParameter.ID = environment.InitializationNumber;
    this.tdpdmtim_autobc_listSearch();
  }
}

