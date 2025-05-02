import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tiivaj_history } from 'src/app/shared/MES/tiivaj_history.model';
import { tiivaj_historyService } from 'src/app/shared/MES/tiivaj_history.service';

@Component({
  selector: 'app-tiivaj_history-info',
  templateUrl: './tiivaj_history-info.component.html',
  styleUrls: ['./tiivaj_history-info.component.css']
})
export class tiivaj_historyInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tiivaj_historyService: tiivaj_historyService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tiivaj_historyService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tiivaj_historySearch();
  }
  tiivaj_historySearch() {
    this.tiivaj_historyService.GetByIDAsync().subscribe(
      res => {
        this.tiivaj_historyService.FormData = res as tiivaj_history;
        if (this.tiivaj_historyService.FormData.IVAJ_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tiivaj_historySave() {
    this.tiivaj_historyService.IsShowLoading = true;
    this.tiivaj_historyService.SaveAsync().subscribe(
      res => {
        this.tiivaj_historyService.FormData = res as tiivaj_history;
        this.Router.navigateByUrl(environment.tiivaj_historyInfo + this.tiivaj_historyService.FormData.IVAJ_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tiivaj_historyService.IsShowLoading = false;
      }
    );
  }
  tiivaj_historyAdd() {
    this.Router.navigateByUrl(environment.tiivaj_historyInfo + environment.InitializationNumber);
    this.tiivaj_historyService.BaseParameter.ID = environment.InitializationNumber;
    this.tiivaj_historySearch();
  }
}

