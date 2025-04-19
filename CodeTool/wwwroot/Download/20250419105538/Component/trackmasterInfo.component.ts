import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { trackmaster } from 'src/app/shared/MES/trackmaster.model';
import { trackmasterService } from 'src/app/shared/MES/trackmaster.service';

@Component({
  selector: 'app-trackmaster-info',
  templateUrl: './trackmaster-info.component.html',
  styleUrls: ['./trackmaster-info.component.css']
})
export class trackmasterInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public trackmasterService: trackmasterService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.trackmasterService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.trackmasterSearch();
  }
  trackmasterSearch() {
    this.trackmasterService.GetByIDAsync().subscribe(
      res => {
        this.trackmasterService.FormData = res as trackmaster;
        if (this.trackmasterService.FormData.RACK_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  trackmasterSave() {
    this.trackmasterService.IsShowLoading = true;
    this.trackmasterService.SaveAsync().subscribe(
      res => {
        this.trackmasterService.FormData = res as trackmaster;
        this.Router.navigateByUrl(environment.trackmasterInfo + this.trackmasterService.FormData.RACK_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.trackmasterService.IsShowLoading = false;
      }
    );
  }
  trackmasterAdd() {
    this.Router.navigateByUrl(environment.trackmasterInfo + environment.InitializationNumber);
    this.trackmasterService.BaseParameter.ID = environment.InitializationNumber;
    this.trackmasterSearch();
  }
}

