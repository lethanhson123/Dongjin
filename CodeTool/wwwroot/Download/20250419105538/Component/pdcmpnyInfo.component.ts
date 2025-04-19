import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { pdcmpny } from 'src/app/shared/MES/pdcmpny.model';
import { pdcmpnyService } from 'src/app/shared/MES/pdcmpny.service';

@Component({
  selector: 'app-pdcmpny-info',
  templateUrl: './pdcmpny-info.component.html',
  styleUrls: ['./pdcmpny-info.component.css']
})
export class pdcmpnyInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public pdcmpnyService: pdcmpnyService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.pdcmpnyService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.pdcmpnySearch();
  }
  pdcmpnySearch() {
    this.pdcmpnyService.GetByIDAsync().subscribe(
      res => {
        this.pdcmpnyService.FormData = res as pdcmpny;
        if (this.pdcmpnyService.FormData.CMPNY_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  pdcmpnySave() {
    this.pdcmpnyService.IsShowLoading = true;
    this.pdcmpnyService.SaveAsync().subscribe(
      res => {
        this.pdcmpnyService.FormData = res as pdcmpny;
        this.Router.navigateByUrl(environment.pdcmpnyInfo + this.pdcmpnyService.FormData.CMPNY_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.pdcmpnyService.IsShowLoading = false;
      }
    );
  }
  pdcmpnyAdd() {
    this.Router.navigateByUrl(environment.pdcmpnyInfo + environment.InitializationNumber);
    this.pdcmpnyService.BaseParameter.ID = environment.InitializationNumber;
    this.pdcmpnySearch();
  }
}

