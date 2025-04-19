import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { pdcdnm } from 'src/app/shared/MES/pdcdnm.model';
import { pdcdnmService } from 'src/app/shared/MES/pdcdnm.service';

@Component({
  selector: 'app-pdcdnm-info',
  templateUrl: './pdcdnm-info.component.html',
  styleUrls: ['./pdcdnm-info.component.css']
})
export class pdcdnmInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public pdcdnmService: pdcdnmService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.pdcdnmService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.pdcdnmSearch();
  }
  pdcdnmSearch() {
    this.pdcdnmService.GetByIDAsync().subscribe(
      res => {
        this.pdcdnmService.FormData = res as pdcdnm;
        if (this.pdcdnmService.FormData.CD_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  pdcdnmSave() {
    this.pdcdnmService.IsShowLoading = true;
    this.pdcdnmService.SaveAsync().subscribe(
      res => {
        this.pdcdnmService.FormData = res as pdcdnm;
        this.Router.navigateByUrl(environment.pdcdnmInfo + this.pdcdnmService.FormData.CD_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.pdcdnmService.IsShowLoading = false;
      }
    );
  }
  pdcdnmAdd() {
    this.Router.navigateByUrl(environment.pdcdnmInfo + environment.InitializationNumber);
    this.pdcdnmService.BaseParameter.ID = environment.InitializationNumber;
    this.pdcdnmSearch();
  }
}

