import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { kr_tdpdotpl_inpo } from 'src/app/shared/MES/kr_tdpdotpl_inpo.model';
import { kr_tdpdotpl_inpoService } from 'src/app/shared/MES/kr_tdpdotpl_inpo.service';

@Component({
  selector: 'app-kr_tdpdotpl_inpo-info',
  templateUrl: './kr_tdpdotpl_inpo-info.component.html',
  styleUrls: ['./kr_tdpdotpl_inpo-info.component.css']
})
export class kr_tdpdotpl_inpoInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public kr_tdpdotpl_inpoService: kr_tdpdotpl_inpoService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.kr_tdpdotpl_inpoService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.kr_tdpdotpl_inpoSearch();
  }
  kr_tdpdotpl_inpoSearch() {
    this.kr_tdpdotpl_inpoService.GetByIDAsync().subscribe(
      res => {
        this.kr_tdpdotpl_inpoService.FormData = res as kr_tdpdotpl_inpo;
        if (this.kr_tdpdotpl_inpoService.FormData.PDOTPL_INPO_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  kr_tdpdotpl_inpoSave() {
    this.kr_tdpdotpl_inpoService.IsShowLoading = true;
    this.kr_tdpdotpl_inpoService.SaveAsync().subscribe(
      res => {
        this.kr_tdpdotpl_inpoService.FormData = res as kr_tdpdotpl_inpo;
        this.Router.navigateByUrl(environment.kr_tdpdotpl_inpoInfo + this.kr_tdpdotpl_inpoService.FormData.PDOTPL_INPO_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.kr_tdpdotpl_inpoService.IsShowLoading = false;
      }
    );
  }
  kr_tdpdotpl_inpoAdd() {
    this.Router.navigateByUrl(environment.kr_tdpdotpl_inpoInfo + environment.InitializationNumber);
    this.kr_tdpdotpl_inpoService.BaseParameter.ID = environment.InitializationNumber;
    this.kr_tdpdotpl_inpoSearch();
  }
}

