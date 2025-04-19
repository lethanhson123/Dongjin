import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { kr_tiivtr } from 'src/app/shared/MES/kr_tiivtr.model';
import { kr_tiivtrService } from 'src/app/shared/MES/kr_tiivtr.service';

@Component({
  selector: 'app-kr_tiivtr-info',
  templateUrl: './kr_tiivtr-info.component.html',
  styleUrls: ['./kr_tiivtr-info.component.css']
})
export class kr_tiivtrInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public kr_tiivtrService: kr_tiivtrService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.kr_tiivtrService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.kr_tiivtrSearch();
  }
  kr_tiivtrSearch() {
    this.kr_tiivtrService.GetByIDAsync().subscribe(
      res => {
        this.kr_tiivtrService.FormData = res as kr_tiivtr;
        if (this.kr_tiivtrService.FormData.IV_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  kr_tiivtrSave() {
    this.kr_tiivtrService.IsShowLoading = true;
    this.kr_tiivtrService.SaveAsync().subscribe(
      res => {
        this.kr_tiivtrService.FormData = res as kr_tiivtr;
        this.Router.navigateByUrl(environment.kr_tiivtrInfo + this.kr_tiivtrService.FormData.IV_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.kr_tiivtrService.IsShowLoading = false;
      }
    );
  }
  kr_tiivtrAdd() {
    this.Router.navigateByUrl(environment.kr_tiivtrInfo + environment.InitializationNumber);
    this.kr_tiivtrService.BaseParameter.ID = environment.InitializationNumber;
    this.kr_tiivtrSearch();
  }
}

