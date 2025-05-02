import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tscmpny } from 'src/app/shared/MES/tscmpny.model';
import { tscmpnyService } from 'src/app/shared/MES/tscmpny.service';

@Component({
  selector: 'app-tscmpny-info',
  templateUrl: './tscmpny-info.component.html',
  styleUrls: ['./tscmpny-info.component.css']
})
export class tscmpnyInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tscmpnyService: tscmpnyService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tscmpnyService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tscmpnySearch();
  }
  tscmpnySearch() {
    this.tscmpnyService.GetByIDAsync().subscribe(
      res => {
        this.tscmpnyService.FormData = res as tscmpny;
        if (this.tscmpnyService.FormData.CMPNY_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tscmpnySave() {
    this.tscmpnyService.IsShowLoading = true;
    this.tscmpnyService.SaveAsync().subscribe(
      res => {
        this.tscmpnyService.FormData = res as tscmpny;
        this.Router.navigateByUrl(environment.tscmpnyInfo + this.tscmpnyService.FormData.CMPNY_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tscmpnyService.IsShowLoading = false;
      }
    );
  }
  tscmpnyAdd() {
    this.Router.navigateByUrl(environment.tscmpnyInfo + environment.InitializationNumber);
    this.tscmpnyService.BaseParameter.ID = environment.InitializationNumber;
    this.tscmpnySearch();
  }
}

