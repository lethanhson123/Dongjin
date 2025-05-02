import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { ttc_part } from 'src/app/shared/MES/ttc_part.model';
import { ttc_partService } from 'src/app/shared/MES/ttc_part.service';

@Component({
  selector: 'app-ttc_part-info',
  templateUrl: './ttc_part-info.component.html',
  styleUrls: ['./ttc_part-info.component.css']
})
export class ttc_partInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public ttc_partService: ttc_partService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.ttc_partService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.ttc_partSearch();
  }
  ttc_partSearch() {
    this.ttc_partService.GetByIDAsync().subscribe(
      res => {
        this.ttc_partService.FormData = res as ttc_part;
        if (this.ttc_partService.FormData.TTC_PART_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  ttc_partSave() {
    this.ttc_partService.IsShowLoading = true;
    this.ttc_partService.SaveAsync().subscribe(
      res => {
        this.ttc_partService.FormData = res as ttc_part;
        this.Router.navigateByUrl(environment.ttc_partInfo + this.ttc_partService.FormData.TTC_PART_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.ttc_partService.IsShowLoading = false;
      }
    );
  }
  ttc_partAdd() {
    this.Router.navigateByUrl(environment.ttc_partInfo + environment.InitializationNumber);
    this.ttc_partService.BaseParameter.ID = environment.InitializationNumber;
    this.ttc_partSearch();
  }
}

