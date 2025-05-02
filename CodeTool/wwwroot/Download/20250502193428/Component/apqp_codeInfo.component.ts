import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { apqp_code } from 'src/app/shared/MES/apqp_code.model';
import { apqp_codeService } from 'src/app/shared/MES/apqp_code.service';

@Component({
  selector: 'app-apqp_code-info',
  templateUrl: './apqp_code-info.component.html',
  styleUrls: ['./apqp_code-info.component.css']
})
export class apqp_codeInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public apqp_codeService: apqp_codeService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.apqp_codeService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.apqp_codeSearch();
  }
  apqp_codeSearch() {
    this.apqp_codeService.GetByIDAsync().subscribe(
      res => {
        this.apqp_codeService.FormData = res as apqp_code;
        if (this.apqp_codeService.FormData.CD_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  apqp_codeSave() {
    this.apqp_codeService.IsShowLoading = true;
    this.apqp_codeService.SaveAsync().subscribe(
      res => {
        this.apqp_codeService.FormData = res as apqp_code;
        this.Router.navigateByUrl(environment.apqp_codeInfo + this.apqp_codeService.FormData.CD_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.apqp_codeService.IsShowLoading = false;
      }
    );
  }
  apqp_codeAdd() {
    this.Router.navigateByUrl(environment.apqp_codeInfo + environment.InitializationNumber);
    this.apqp_codeService.BaseParameter.ID = environment.InitializationNumber;
    this.apqp_codeSearch();
  }
}

