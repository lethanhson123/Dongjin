import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tdpdotpl_tmp } from 'src/app/shared/MES/tdpdotpl_tmp.model';
import { tdpdotpl_tmpService } from 'src/app/shared/MES/tdpdotpl_tmp.service';

@Component({
  selector: 'app-tdpdotpl_tmp-info',
  templateUrl: './tdpdotpl_tmp-info.component.html',
  styleUrls: ['./tdpdotpl_tmp-info.component.css']
})
export class tdpdotpl_tmpInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tdpdotpl_tmpService: tdpdotpl_tmpService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tdpdotpl_tmpService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tdpdotpl_tmpSearch();
  }
  tdpdotpl_tmpSearch() {
    this.tdpdotpl_tmpService.GetByIDAsync().subscribe(
      res => {
        this.tdpdotpl_tmpService.FormData = res as tdpdotpl_tmp;
        if (this.tdpdotpl_tmpService.FormData.PDOTPL_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tdpdotpl_tmpSave() {
    this.tdpdotpl_tmpService.IsShowLoading = true;
    this.tdpdotpl_tmpService.SaveAsync().subscribe(
      res => {
        this.tdpdotpl_tmpService.FormData = res as tdpdotpl_tmp;
        this.Router.navigateByUrl(environment.tdpdotpl_tmpInfo + this.tdpdotpl_tmpService.FormData.PDOTPL_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tdpdotpl_tmpService.IsShowLoading = false;
      }
    );
  }
  tdpdotpl_tmpAdd() {
    this.Router.navigateByUrl(environment.tdpdotpl_tmpInfo + environment.InitializationNumber);
    this.tdpdotpl_tmpService.BaseParameter.ID = environment.InitializationNumber;
    this.tdpdotpl_tmpSearch();
  }
}

