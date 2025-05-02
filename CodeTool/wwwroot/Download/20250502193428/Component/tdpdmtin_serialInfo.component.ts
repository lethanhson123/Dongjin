import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tdpdmtin_serial } from 'src/app/shared/MES/tdpdmtin_serial.model';
import { tdpdmtin_serialService } from 'src/app/shared/MES/tdpdmtin_serial.service';

@Component({
  selector: 'app-tdpdmtin_serial-info',
  templateUrl: './tdpdmtin_serial-info.component.html',
  styleUrls: ['./tdpdmtin_serial-info.component.css']
})
export class tdpdmtin_serialInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tdpdmtin_serialService: tdpdmtin_serialService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tdpdmtin_serialService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tdpdmtin_serialSearch();
  }
  tdpdmtin_serialSearch() {
    this.tdpdmtin_serialService.GetByIDAsync().subscribe(
      res => {
        this.tdpdmtin_serialService.FormData = res as tdpdmtin_serial;
        if (this.tdpdmtin_serialService.FormData.TDPDMTIN_SERIAL_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tdpdmtin_serialSave() {
    this.tdpdmtin_serialService.IsShowLoading = true;
    this.tdpdmtin_serialService.SaveAsync().subscribe(
      res => {
        this.tdpdmtin_serialService.FormData = res as tdpdmtin_serial;
        this.Router.navigateByUrl(environment.tdpdmtin_serialInfo + this.tdpdmtin_serialService.FormData.TDPDMTIN_SERIAL_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tdpdmtin_serialService.IsShowLoading = false;
      }
    );
  }
  tdpdmtin_serialAdd() {
    this.Router.navigateByUrl(environment.tdpdmtin_serialInfo + environment.InitializationNumber);
    this.tdpdmtin_serialService.BaseParameter.ID = environment.InitializationNumber;
    this.tdpdmtin_serialSearch();
  }
}

