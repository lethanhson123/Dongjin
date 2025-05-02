import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tscode } from 'src/app/shared/MES/tscode.model';
import { tscodeService } from 'src/app/shared/MES/tscode.service';

@Component({
  selector: 'app-tscode-info',
  templateUrl: './tscode-info.component.html',
  styleUrls: ['./tscode-info.component.css']
})
export class tscodeInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tscodeService: tscodeService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tscodeService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tscodeSearch();
  }
  tscodeSearch() {
    this.tscodeService.GetByIDAsync().subscribe(
      res => {
        this.tscodeService.FormData = res as tscode;
        if (this.tscodeService.FormData.CD_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tscodeSave() {
    this.tscodeService.IsShowLoading = true;
    this.tscodeService.SaveAsync().subscribe(
      res => {
        this.tscodeService.FormData = res as tscode;
        this.Router.navigateByUrl(environment.tscodeInfo + this.tscodeService.FormData.CD_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tscodeService.IsShowLoading = false;
      }
    );
  }
  tscodeAdd() {
    this.Router.navigateByUrl(environment.tscodeInfo + environment.InitializationNumber);
    this.tscodeService.BaseParameter.ID = environment.InitializationNumber;
    this.tscodeSearch();
  }
}

