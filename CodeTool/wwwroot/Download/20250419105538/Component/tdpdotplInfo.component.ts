import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tdpdotpl } from 'src/app/shared/MES/tdpdotpl.model';
import { tdpdotplService } from 'src/app/shared/MES/tdpdotpl.service';

@Component({
  selector: 'app-tdpdotpl-info',
  templateUrl: './tdpdotpl-info.component.html',
  styleUrls: ['./tdpdotpl-info.component.css']
})
export class tdpdotplInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tdpdotplService: tdpdotplService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tdpdotplService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tdpdotplSearch();
  }
  tdpdotplSearch() {
    this.tdpdotplService.GetByIDAsync().subscribe(
      res => {
        this.tdpdotplService.FormData = res as tdpdotpl;
        if (this.tdpdotplService.FormData.PDOTPL_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tdpdotplSave() {
    this.tdpdotplService.IsShowLoading = true;
    this.tdpdotplService.SaveAsync().subscribe(
      res => {
        this.tdpdotplService.FormData = res as tdpdotpl;
        this.Router.navigateByUrl(environment.tdpdotplInfo + this.tdpdotplService.FormData.PDOTPL_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tdpdotplService.IsShowLoading = false;
      }
    );
  }
  tdpdotplAdd() {
    this.Router.navigateByUrl(environment.tdpdotplInfo + environment.InitializationNumber);
    this.tdpdotplService.BaseParameter.ID = environment.InitializationNumber;
    this.tdpdotplSearch();
  }
}

