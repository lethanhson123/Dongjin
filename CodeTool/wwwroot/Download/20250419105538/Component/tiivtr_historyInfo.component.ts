import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tiivtr_history } from 'src/app/shared/MES/tiivtr_history.model';
import { tiivtr_historyService } from 'src/app/shared/MES/tiivtr_history.service';

@Component({
  selector: 'app-tiivtr_history-info',
  templateUrl: './tiivtr_history-info.component.html',
  styleUrls: ['./tiivtr_history-info.component.css']
})
export class tiivtr_historyInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tiivtr_historyService: tiivtr_historyService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tiivtr_historyService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tiivtr_historySearch();
  }
  tiivtr_historySearch() {
    this.tiivtr_historyService.GetByIDAsync().subscribe(
      res => {
        this.tiivtr_historyService.FormData = res as tiivtr_history;
        if (this.tiivtr_historyService.FormData.IV_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tiivtr_historySave() {
    this.tiivtr_historyService.IsShowLoading = true;
    this.tiivtr_historyService.SaveAsync().subscribe(
      res => {
        this.tiivtr_historyService.FormData = res as tiivtr_history;
        this.Router.navigateByUrl(environment.tiivtr_historyInfo + this.tiivtr_historyService.FormData.IV_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tiivtr_historyService.IsShowLoading = false;
      }
    );
  }
  tiivtr_historyAdd() {
    this.Router.navigateByUrl(environment.tiivtr_historyInfo + environment.InitializationNumber);
    this.tiivtr_historyService.BaseParameter.ID = environment.InitializationNumber;
    this.tiivtr_historySearch();
  }
}

